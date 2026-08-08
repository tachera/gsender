const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');

function copyInto(destinationDir, sourceNames) {
  fs.mkdirSync(destinationDir, { recursive: true });

  for (const sourceName of sourceNames) {
    const sourcePath = path.join(repoRoot, sourceName);
    const destinationPath = path.join(destinationDir, path.basename(sourceName));

    fs.cpSync(sourcePath, destinationPath, {
      force: true,
      recursive: true,
    });
  }
}

const target = process.argv[2];

if (target === 'css') {
  copyInto(path.join(repoRoot, 'dist', 'gsender', 'app', 'src'), [
    path.join('src', 'app', 'src', 'application.css'),
  ]);
} else if (target === 'vite') {
  copyInto(path.join(repoRoot, 'dist', 'gsender', 'app'), [
    path.join('src', 'app', 'favicon.ico'),
    path.join('src', 'app', 'images'),
    path.join('src', 'app', 'assets'),
  ]);
} else {
  console.error('Unknown copy target. Use "css" or "vite".');
  process.exit(1);
}