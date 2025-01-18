import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
const IS_GITHUB_PAGE_DEPLOY = process.env.VITE_IS_GITHUB_PAGE_DEPLOY === "true";
const base = IS_GITHUB_PAGE_DEPLOY ? "/temp-mail-react-js" : "/";
console.log(base, "base");
export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
