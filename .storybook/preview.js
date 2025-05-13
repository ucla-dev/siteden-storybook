/** @type { import('@storybook/html-vite').Preview } */
import '../src/scss/style.css';
import '../src/js/main.js';

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Content', 'Components', 'Sections', 'Pages'],
      },
    },
  },
};

export default preview;
