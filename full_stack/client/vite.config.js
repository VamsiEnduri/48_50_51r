import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with /api to Django backend
      "/api": {
        target: "http://127.0.0.1:8000", // Django server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
