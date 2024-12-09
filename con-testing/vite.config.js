import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import path from "node:path";

const isGitHubPages = true;
const folderName = `${path.basename(process.cwd())}/`;
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? `/${folderName}` : "/";

export default defineConfig({
  root: "src",
  base,
  mode,
  envDir: "../",
  publicDir: "../public",
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  },
  build: {
    outDir: "../dist",
    assetsDir: "./"
  },
  test: {
    environment: "node", // Ambiente de testing
    includeSource: ["src/**/*.{js,ts}"], // Archivos a incluir
    coverage: {
      reporter: ["text", "json", "html"], // Tipos de reporte de coverage
      exclude: [ // Archivos a excluir del coverage
        "node_modules/",
        "dist/",
      ],
    }
  }
});
