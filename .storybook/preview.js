/** @type { import('@storybook/html-vite').Preview } */
import '../src/dist/style.css';

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
