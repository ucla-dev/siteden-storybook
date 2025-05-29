import {createInlineStyles} from './InlineStyles';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Content/InlineStyles',
  tags: ['autodocs'],
  render: ({text, ...args }) => {
    return createInlineStyles({ text, ...args });
  },
  argTypes: {
    text: { control: 'text' },
    element: {
      control: { type: 'select' },
      options: ['Strong', 'Bold', 'Emphasis', 'Strike', 'Inserted', 'Marked', 'Code'],
    },
  }
};

export const strong = {
  args: {
    text: 'strong',
    element: 'Strong',
  },
};

export const bold = {
  args: {
    text: 'bold',
    element: 'Bold',
  },
};

export const emphasis = {
  args: {
    text: 'emphasis',
    element: 'Emphasis',
  },
};

export const strike = {
  args: {
    text: 'strike',
    element: 'Strike',
  },
};

export const inserted = {
  args: {
    text: 'inserted',
    element: 'Inserted',
  },
};

export const marked = {
  args: {
    text: 'marked',
    element: 'Marked',
  },
};

export const code = {
  args: {
    text: 'code',
    element: 'Code',
  },
};
