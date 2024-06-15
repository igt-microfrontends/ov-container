import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "remotes-app",
            filename: "remoteEntry.js",
            exposes: {
                "./useAuth": "./src/hooks/useAuth.ts",
            },
            remotes: {
                remoteDashboardApp: "http://localhost:4173/assets/remoteEntry.js",
                remoteCalculatorApp: "http://localhost:4174/assets/remoteEntry.js",
            },
            shared: ["react"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
    },
});
