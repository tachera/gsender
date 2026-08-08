// vite.config.js
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxnaXRcXFxcZ3NlbmRlclxcXFxzcmNcXFxcYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxnaXRcXFxcZ3NlbmRlclxcXFxzcmNcXFxcYXBwXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9naXQvZ3NlbmRlci9zcmMvYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XG5pbXBvcnQgeyBwYXRjaENzc01vZHVsZXMgfSBmcm9tICd2aXRlLWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IG5vZGVQb2x5ZmlsbHMgfSBmcm9tICd2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxscyc7XG5pbXBvcnQgeyBzZW50cnlWaXRlUGx1Z2luIH0gZnJvbSAnQHNlbnRyeS92aXRlLXBsdWdpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcm9vdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vJyksIC8vIFNldCByb290IHRvIHRoZSBkaXJlY3RvcnkgY29udGFpbmluZyBpbmRleC5odG1sXG4gICAgYmFzZTogJy4vJyxcbiAgICBjc3M6IHtcbiAgICAgICAgcG9zdGNzczoge1xuICAgICAgICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzKCldLFxuICAgICAgICB9LFxuICAgICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7IHN0eWx1czogeyBtb2R1bGVzOiB0cnVlIH0gfSxcbiAgICAgICAgbW9kdWxlczoge1xuICAgICAgICAgICAgLy8gRW5hYmxlIENTUyBNb2R1bGVzIGZvciBhbGwgLnNjc3MgZmlsZXNcbiAgICAgICAgICAgIGxvY2Fsc0NvbnZlbnRpb246ICdjYW1lbENhc2VPbmx5JyxcbiAgICAgICAgICAgIGdlbmVyYXRlU2NvcGVkTmFtZTogJ1tuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XScsXG4gICAgICAgIH0sXG4gICAgICAgIGRldlNvdXJjZW1hcDogdHJ1ZSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdHNjb25maWdQYXRocygpLFxuICAgICAgICByZWFjdCgpLFxuICAgICAgICBwYXRjaENzc01vZHVsZXMoKSxcbiAgICAgICAgdGFpbHdpbmRjc3MoKSxcbiAgICAgICAgbm9kZVBvbHlmaWxscyh7XG4gICAgICAgICAgICAvLyBUbyBhZGQgb25seSBzcGVjaWZpYyBwb2x5ZmlsbHMsIGFkZCB0aGVtIGhlcmUuIElmIG5vIG9wdGlvbiBpcyBwYXNzZWQsIGFkZHMgYWxsIHBvbHlmaWxsc1xuICAgICAgICAgICAgaW5jbHVkZTogWydwcm9jZXNzJ10sXG4gICAgICAgICAgICBnbG9iYWxzOiB7IGdsb2JhbDogdHJ1ZSwgcHJvY2VzczogdHJ1ZSB9LFxuICAgICAgICB9KSxcbiAgICAgICAgc2VudHJ5Vml0ZVBsdWdpbih7XG4gICAgICAgICAgICBvcmc6IHByb2Nlc3MuZW52LlNFTlRSWV9PUkcsXG4gICAgICAgICAgICBwcm9qZWN0OiBwcm9jZXNzLmVudi5TRU5UUllfUFJPSkVDVCxcbiAgICAgICAgICAgIGF1dGhUb2tlbjogcHJvY2Vzcy5lbnYuU0VOVFJZX0FVVEhfVE9LRU4sXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgYXBwOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZpbmU6IHt9LFxuICAgIHNlcnZlcjoge1xuICAgICAgICBobXI6IHtcbiAgICAgICAgICAgIG92ZXJsYXk6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwcm94eToge1xuICAgICAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzEyNy4wLjAuMTo4MDAwJyxcbiAgICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJy9zb2NrZXQuaW8nOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzEyNy4wLjAuMTo4MDAwJyxcbiAgICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgd3M6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICAgIGluY2x1ZGU6IFsnKiovKi5zdHlsJ10sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIC8qcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGV4dGVybmFsOiBbJ3VuZW52L25vZGUvcHJvY2VzcyddXG4gICAgICAgICAgICB9XG4gICAgICAgIH0qL1xuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFAsU0FBUyxvQkFBb0I7QUFDM1IsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHdCQUF3QjtBQVBqQyxJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixNQUFNLEtBQUssUUFBUSxrQ0FBVyxJQUFJO0FBQUE7QUFBQSxFQUNsQyxNQUFNO0FBQUEsRUFDTixLQUFLO0FBQUEsSUFDRCxTQUFTO0FBQUEsTUFDTCxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQUEsSUFDM0I7QUFBQSxJQUNBLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxTQUFTLEtBQUssRUFBRTtBQUFBLElBQ2pELFNBQVM7QUFBQTtBQUFBLE1BRUwsa0JBQWtCO0FBQUEsTUFDbEIsb0JBQW9CO0FBQUEsSUFDeEI7QUFBQSxJQUNBLGNBQWM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sZ0JBQWdCO0FBQUEsSUFDaEIsWUFBWTtBQUFBLElBQ1osY0FBYztBQUFBO0FBQUEsTUFFVixTQUFTLENBQUMsU0FBUztBQUFBLE1BQ25CLFNBQVMsRUFBRSxRQUFRLE1BQU0sU0FBUyxLQUFLO0FBQUEsSUFDM0MsQ0FBQztBQUFBLElBQ0QsaUJBQWlCO0FBQUEsTUFDYixLQUFLLFFBQVEsSUFBSTtBQUFBLE1BQ2pCLFNBQVMsUUFBUSxJQUFJO0FBQUEsTUFDckIsV0FBVyxRQUFRLElBQUk7QUFBQSxJQUMzQixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3BDLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN4QztBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVEsQ0FBQztBQUFBLEVBQ1QsUUFBUTtBQUFBLElBQ0osS0FBSztBQUFBLE1BQ0QsU0FBUztBQUFBLElBQ2I7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNILFFBQVE7QUFBQSxRQUNKLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNsQjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsSUFBSTtBQUFBLE1BQ1I7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1YsU0FBUyxDQUFDLFdBQVc7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1mO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
