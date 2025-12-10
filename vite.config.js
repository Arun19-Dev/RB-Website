import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/RB-Website/",

  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify(process.env.VITE_API_BASE_URL || 'http://localhost:8000')
  },
  base: process.env.NODE_ENV === "production" ? "/roadbuddy/" : "/",
  server: {
    port: 3000,
  },
});
