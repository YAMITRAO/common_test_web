import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/common_test_web", // git repo for github page to live
  plugins: [react()],
  build: {
    outDir: "dist", // The build output folder (default is "dist")
  },
});
