import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const IS_GITHUB_PAGE_DEPLOY = env.VITE_IS_GITHUB_PAGE_DEPLOY === "true";
  const base = IS_GITHUB_PAGE_DEPLOY ? "/temp-mail-react-js/" : "/";
  console.log(base, "base");

  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
