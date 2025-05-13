import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // Overwrite default .html entry.
      input: [
        './src/scss/style.scss',
        './src/js/main.js',
      ],
      // Remove the [hash] so we can find the file with pattern lab.
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
