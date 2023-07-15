import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';


export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    root: 'src',
    build: {
      // Relative to the root
      outDir: '../src',
    },
    publicDir: '../public',
    plugins: [
      createHtmlPlugin({
        inject: {
          data: {
            title: isProduction ? 'My site' : `My site [${mode.toUpperCase()}]`,
          },
        },
      }),
      sass({
         include: '**/*.{scss}',
        babel: {
          plugins: ['babel-plugin-styled-components'],
        },
      }),
      react({
        // Use React plugin in all *.jsx and *.tsx files
        include: '**/*.{jsx,tsx}',
        babel: {
          plugins: ['babel-plugin-styled-components'],
        },
      }),
    ],
  };
});
