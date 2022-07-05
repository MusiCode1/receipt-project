import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePluginNode } from "vite-plugin-node";
//import requireTransform from "vite-plugin-require-transform";
import requireTransform from "vite-plugin-require"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    svelte(),

    (requireTransform as any).default(),

    ...VitePluginNode({
      adapter: "express",
      appPath: "../backend/src/index.js",
      exportName: "app"
    })

  ]
})
