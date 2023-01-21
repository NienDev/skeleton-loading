import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  based: "/skeleton-loading-component/",
  plugins: [react()],
});
