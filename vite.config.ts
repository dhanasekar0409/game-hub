import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        // main: path.resolve(__dirname, 'main.html')
      },
    },
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "./node_modules/bootstrap"),
    },
  },
  plugins: [react()],
  server: {
    // open: './main.html',
    open: "./",
    port: 3000,
  },
});
