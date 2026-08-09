// src/app/vite.config.js
import { defineConfig } from "file:///C:/git/gsender/node_modules/vite/dist/node/index.js";
import path from "path";
import react from "file:///C:/git/gsender/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///C:/git/gsender/node_modules/tailwindcss/lib/index.js";
import tsconfigPaths from "file:///C:/git/gsender/node_modules/vite-tsconfig-paths/dist/index.js";
import { patchCssModules } from "file:///C:/git/gsender/node_modules/vite-css-modules/dist/index.mjs";
import { nodePolyfills } from "file:///C:/git/gsender/node_modules/vite-plugin-node-polyfills/dist/index.js";
import { sentryVitePlugin } from "file:///C:/git/gsender/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
var __vite_injected_original_dirname = "C:\\git\\gsender\\src\\app";
var vite_config_default = defineConfig({
  root: path.resolve(__vite_injected_original_dirname, "./"),
  // Set root to the directory containing index.html
  base: "./",
  css: {
    postcss: {
      plugins: [tailwindcss()]
    },
    preprocessorOptions: { stylus: { modules: true } },
    modules: {
      // Enable CSS Modules for all .scss files
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    },
    devSourcemap: true
  },
  plugins: [
    tsconfigPaths(),
    react(),
    patchCssModules(),
    tailwindcss(),
    nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      include: ["process"],
      globals: { global: true, process: true }
    }),
    sentryVitePlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN
    })
  ],
  resolve: {
    alias: {
      app: path.resolve(__vite_injected_original_dirname, "./src"),
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  define: {},
  server: {
    hmr: {
      overlay: false
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true
      },
      "/socket.io": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        ws: true
      }
    }
  },
  optimizeDeps: {
    include: ["**/*.styl"]
  },
  build: {
    sourcemap: true
    /*rollupOptions: {
        rollupOptions: {
            external: ['unenv/node/process']
        }
    }*/
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC92aXRlLmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXGdpdFxcXFxnc2VuZGVyXFxcXHNyY1xcXFxhcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXGdpdFxcXFxnc2VuZGVyXFxcXHNyY1xcXFxhcHBcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2dpdC9nc2VuZGVyL3NyYy9hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmltcG9ydCB7IHBhdGNoQ3NzTW9kdWxlcyB9IGZyb20gJ3ZpdGUtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzJztcbmltcG9ydCB7IHNlbnRyeVZpdGVQbHVnaW4gfSBmcm9tICdAc2VudHJ5L3ZpdGUtcGx1Z2luJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICByb290OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi8nKSwgLy8gU2V0IHJvb3QgdG8gdGhlIGRpcmVjdG9yeSBjb250YWluaW5nIGluZGV4Lmh0bWxcbiAgICBiYXNlOiAnLi8nLFxuICAgIGNzczoge1xuICAgICAgICBwb3N0Y3NzOiB7XG4gICAgICAgICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MoKV0sXG4gICAgICAgIH0sXG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHsgc3R5bHVzOiB7IG1vZHVsZXM6IHRydWUgfSB9LFxuICAgICAgICBtb2R1bGVzOiB7XG4gICAgICAgICAgICAvLyBFbmFibGUgQ1NTIE1vZHVsZXMgZm9yIGFsbCAuc2NzcyBmaWxlc1xuICAgICAgICAgICAgbG9jYWxzQ29udmVudGlvbjogJ2NhbWVsQ2FzZU9ubHknLFxuICAgICAgICAgICAgZ2VuZXJhdGVTY29wZWROYW1lOiAnW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGV2U291cmNlbWFwOiB0cnVlLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICB0c2NvbmZpZ1BhdGhzKCksXG4gICAgICAgIHJlYWN0KCksXG4gICAgICAgIHBhdGNoQ3NzTW9kdWxlcygpLFxuICAgICAgICB0YWlsd2luZGNzcygpLFxuICAgICAgICBub2RlUG9seWZpbGxzKHtcbiAgICAgICAgICAgIC8vIFRvIGFkZCBvbmx5IHNwZWNpZmljIHBvbHlmaWxscywgYWRkIHRoZW0gaGVyZS4gSWYgbm8gb3B0aW9uIGlzIHBhc3NlZCwgYWRkcyBhbGwgcG9seWZpbGxzXG4gICAgICAgICAgICBpbmNsdWRlOiBbJ3Byb2Nlc3MnXSxcbiAgICAgICAgICAgIGdsb2JhbHM6IHsgZ2xvYmFsOiB0cnVlLCBwcm9jZXNzOiB0cnVlIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBzZW50cnlWaXRlUGx1Z2luKHtcbiAgICAgICAgICAgIG9yZzogcHJvY2Vzcy5lbnYuU0VOVFJZX09SRyxcbiAgICAgICAgICAgIHByb2plY3Q6IHByb2Nlc3MuZW52LlNFTlRSWV9QUk9KRUNULFxuICAgICAgICAgICAgYXV0aFRva2VuOiBwcm9jZXNzLmVudi5TRU5UUllfQVVUSF9UT0tFTixcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICBhcHA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmluZToge30sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIGhtcjoge1xuICAgICAgICAgICAgb3ZlcmxheTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB7XG4gICAgICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLFxuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnL3NvY2tldC5pbyc6IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLFxuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3czogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgaW5jbHVkZTogWycqKi8qLnN0eWwnXSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgICAgLypyb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZXh0ZXJuYWw6IFsndW5lbnYvbm9kZS9wcm9jZXNzJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSovXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UCxTQUFTLG9CQUFvQjtBQUMzUixPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsd0JBQXdCO0FBUGpDLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE1BQU0sS0FBSyxRQUFRLGtDQUFXLElBQUk7QUFBQTtBQUFBLEVBQ2xDLE1BQU07QUFBQSxFQUNOLEtBQUs7QUFBQSxJQUNELFNBQVM7QUFBQSxNQUNMLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFBQSxJQUMzQjtBQUFBLElBQ0EscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFNBQVMsS0FBSyxFQUFFO0FBQUEsSUFDakQsU0FBUztBQUFBO0FBQUEsTUFFTCxrQkFBa0I7QUFBQSxNQUNsQixvQkFBb0I7QUFBQSxJQUN4QjtBQUFBLElBQ0EsY0FBYztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxNQUFNO0FBQUEsSUFDTixnQkFBZ0I7QUFBQSxJQUNoQixZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUE7QUFBQSxNQUVWLFNBQVMsQ0FBQyxTQUFTO0FBQUEsTUFDbkIsU0FBUyxFQUFFLFFBQVEsTUFBTSxTQUFTLEtBQUs7QUFBQSxJQUMzQyxDQUFDO0FBQUEsSUFDRCxpQkFBaUI7QUFBQSxNQUNiLEtBQUssUUFBUSxJQUFJO0FBQUEsTUFDakIsU0FBUyxRQUFRLElBQUk7QUFBQSxNQUNyQixXQUFXLFFBQVEsSUFBSTtBQUFBLElBQzNCLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDcEMsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3hDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUSxDQUFDO0FBQUEsRUFDVCxRQUFRO0FBQUEsSUFDSixLQUFLO0FBQUEsTUFDRCxTQUFTO0FBQUEsSUFDYjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0gsUUFBUTtBQUFBLFFBQ0osUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2xCO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxJQUFJO0FBQUEsTUFDUjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDVixTQUFTLENBQUMsV0FBVztBQUFBLEVBQ3pCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTWY7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
