import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env');

  return {
    plugins: [
      vue({
        template: {
          transformAssetUrls: {
            includeAbsolute: false,
          },
        },
      }),
      svgLoader(),
      createHtmlPlugin({ injectData: { ...env, MODE: mode } }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: { port: 8080 },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `
    //     @import "./src/scss/typography.scss";
    //     @import "./src/scss/embedFonts.scss";
    //     @import "./src/scss/variables.scss";
    //     @import "./src/scss/responsive.scss";
    //     @import "./src/scss/mixins.scss";
    //     @import "./src/scss/zIndex.scss";
    //     @import "./src/scss/app.scss";
    //     @import "./src/scss/index.scss";
    //       `,
    //     },
    //   },
    // },
  };
});
