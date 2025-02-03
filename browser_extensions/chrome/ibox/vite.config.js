import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {configFile: 'src/styles/settings.scss'},

    }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: false,
        inlineDynamicImports: true,
        // preserveModules: true,
        entryFileNames: '[name]_msd.js',   // currently does not work for the legacy bundle
        assetFileNames: '[name].[ext]',
        dir: 'ibox_stage',
      },
    },
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
