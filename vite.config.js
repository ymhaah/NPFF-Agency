import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths"; //? npm i vite-jsconfig-paths -D

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), jsconfigPaths()],
});
