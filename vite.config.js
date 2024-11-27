"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var path_1 = require("path");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            '@': path_1.default.resolve(__dirname, './src'),
            '@components': path_1.default.resolve(__dirname, './src/components'),
            '@hooks': path_1.default.resolve(__dirname, './src/hooks'),
            '@store': path_1.default.resolve(__dirname, './src/store'),
            '@utils': path_1.default.resolve(__dirname, './src/utils'),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: true
    }
});
