import { defineConfig } from "vite";
import express from 'vite-plugin-express';

export default defineConfig({
    plugins:[express({
        middlewareFiles:'./express/router',
        prefixUrl:'/api'
    })]
})