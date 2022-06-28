import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePluginNode } from "vite-plugin-node";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    svelte(),

/*     vitePluginRequire(),

    VitePluginNode({
      adapter: "express",
      appPath: "../backend/src/index.js"
    }) */

  ]
})
