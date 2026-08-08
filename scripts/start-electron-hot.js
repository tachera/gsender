const http = require('http');
const { spawn } = require('child_process');

const rendererUrl = 'http://127.0.0.1:5173';
const timeoutMs = 60000;
const retryMs = 200;
const startedAt = Date.now();

const startElectron = () => {
    const electron = spawn(require('electron'), ['./output/main'], {
        env: {
            ...process.env,
            NODE_ENV: 'development',
            ELECTRON_RENDERER_URL: rendererUrl,
        },
        stdio: 'inherit',
    });

    electron.on('exit', (code) => process.exit(code || 0));
    electron.on('error', (error) => {
        console.error('Unable to start Electron:', error);
        process.exit(1);
    });

    process.on('SIGINT', () => electron.kill('SIGINT'));
    process.on('SIGTERM', () => electron.kill('SIGTERM'));
};

const waitForRenderer = () => {
    const request = http.get(rendererUrl, (response) => {
        response.resume();
        startElectron();
    });

    request.on('error', () => {
        if (Date.now() - startedAt >= timeoutMs) {
            console.error(`Vite did not become available at ${rendererUrl} within 60 seconds.`);
            process.exit(1);
        }

        setTimeout(waitForRenderer, retryMs);
    });

    request.setTimeout(retryMs, () => request.destroy());
};

waitForRenderer();