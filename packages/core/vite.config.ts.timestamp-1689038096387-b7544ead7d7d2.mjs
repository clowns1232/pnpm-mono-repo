// vite.config.ts
import { defineConfig } from "file:///Users/hwangtaehyeon/Desktop/react-examples/pnpm-mono-repo/node_modules/.pnpm/vite@4.3.2/node_modules/vite/dist/node/index.js";
import react from "file:///Users/hwangtaehyeon/Desktop/react-examples/pnpm-mono-repo/node_modules/.pnpm/@vitejs+plugin-react@4.0.0_vite@4.3.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///Users/hwangtaehyeon/Desktop/react-examples/pnpm-mono-repo/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@5.0.4_vite@4.3.2/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///Users/hwangtaehyeon/Desktop/react-examples/pnpm-mono-repo/node_modules/.pnpm/vite-plugin-dts@2.3.0_vite@4.3.2/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths(), dts()],
  build: {
    ssr: true,
    lib: {
      entry: "src/index.ts",
      name: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "src/stories/*", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHdhbmd0YWVoeWVvbi9EZXNrdG9wL3JlYWN0LWV4YW1wbGVzL3BucG0tbW9uby1yZXBvL3BhY2thZ2VzL2NvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9od2FuZ3RhZWh5ZW9uL0Rlc2t0b3AvcmVhY3QtZXhhbXBsZXMvcG5wbS1tb25vLXJlcG8vcGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaHdhbmd0YWVoeWVvbi9EZXNrdG9wL3JlYWN0LWV4YW1wbGVzL3BucG0tbW9uby1yZXBvL3BhY2thZ2VzL2NvcmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksdHNjb25maWdQYXRocygpLGR0cygpXSxcbiAgYnVpbGQ6IHtcbiAgICBzc3I6dHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcbiAgICAgIG5hbWU6ICdpbmRleCcsXG4gICAgICBmb3JtYXRzOiBbJ2VzJ11cbiAgICB9LFxuICAgIFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3NyYy9zdG9yaWVzLyonLCdyZWFjdC1kb20nXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFksU0FBUyxvQkFBb0I7QUFDdmEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUdoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFFLGNBQWMsR0FBRSxJQUFJLENBQUM7QUFBQSxFQUN2QyxPQUFPO0FBQUEsSUFDTCxLQUFJO0FBQUEsSUFDSixLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFFQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxpQkFBZ0IsV0FBVztBQUFBLE1BQy9DLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
