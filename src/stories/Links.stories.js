import { createLink } from './Links';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Content/Links',
  tags: ['autodocs'],
  render: ({ text, ...args }) => {
    return createLink({ text, ...args });
  },
  argTypes: {
    source: {
      control: { type: 'select' },
      options: ['Internal', 'External'],
    },
    text: { control: 'text' },
  }
};

export const internalLink = {
  args: {
    source: 'Internal',
    text: 'Hello World, I\'m an Internal Link ',
  },
};

export const externalLink = {
  args: {
    source: 'External',
    text: 'Hello World, I\'m an External Link ',
  },
};

