import { createColoredBackground } from './ColoredBackgrounds';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Content/Colored Backgrounds',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return createColoredBackground({ ...args });
  },
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['Default', 'UCLA Blue', 'Gray 8%'],
    }
  }
};

export const whiteBackground = {
  args: {
    backgroundColor: "Default"
  },
};

export const blueBackground = {
  args: {
    backgroundColor: "UCLA Blue"
  },
};

export const grayBackground = {
  args: {
    backgroundColor: "Gray 8%"
  },
};
