import {createInlineStyles} from './InlineElements';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Content/Inline Elements',
  tags: ['autodocs'],
  render: ({text, ...args }) => {
    return createInlineStyles({ text, ...args });
  },
  argTypes: {
    text: { control: 'text' },
    element: {
      control: { type: 'select' },
      options: ['-none-', 'Strong', 'Bold', 'Emphasis', 'Strike', 'Inserted', 'Marked', 'Code'],
    },
    style: {
      control: { type: 'select' },
      options: ['Large Text', 'Small Text', 'Editorial Text', 'Uppercase Text'],
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

export const largeText = {
  args: {
    text: 'large text',
    element: '-none-',
    style: 'Large Text'
  },
};

export const smallText = {
  args: {
    text: 'small text',
    element: '-none-',
    style: 'Small Text'
  },
};

export const editorialText = {
  args: {
    text: 'editorial text',
    element: '-none-',
    style: 'Editorial Text'
  },
};

export const uppercaseText = {
  args: {
    text: 'uppercase text',
    element: '-none-',
    style: 'Uppercase Text'
  },
};
