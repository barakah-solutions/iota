import { defineConfig } from "vite";

import path from "path";
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [solid()],
    server: {
        host: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@fonts": path.resolve(__dirname, "src/fonts"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@stylesheets": path.resolve(__dirname, "src/stylesheets"),
        },
    },
});
