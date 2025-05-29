import { createLists} from './Lists';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Content/Lists',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return createLists({ ...args });
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['Unordered List', 'Ordered List', 'Descriptive List'],
    },
    nested: { control: 'boolean' },
    external: { control: 'boolean' },
    indicator: { control: 'boolean' },
    style: {
      control: { type: 'select' },
      options: ['-none-', 'Bullet List', 'Inline List', 'Pipe List', 'Link List', 'Icon Link List', 'Plain List', 'Flush List', 'Lower Alpha List', 'Upper Alpha List', 'Lower Roman List', 'Upper Roman List', 'Alpha Numeric Roman List'],
    },
  }
};

export const unorderedLists = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: false,
    indicator: false,
  },
};

export const orderedLists = {
  args: {
    type: 'Ordered List',
    nested: false,
    external: false,
    indicator: false,
  },
};

export const descriptiveList = {
  args: {
    type: 'Descriptive List',
    nested: false,
    external: false,
    indicator: false,
  },
};

export const bulletedList = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: false,
    style: 'Bullet List',
    indicator: false,
  },
};

export const inlineList = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: false,
    style: 'Inline List',
    indicator: false,
  },
};

export const pipeList = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: false,
    style: 'Pipe List',
    indicator: false,
  },
};

export const LinkList = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: false,
    style: 'Link List',
    indicator: false,
  },
};

export const internalLinkList = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: false,
    style: 'Icon Link List',
    indicator: true,
  },
};

export const externalLinkList = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: true,
    style: 'Icon Link List',
    indicator: true,
  },
};

export const plainList = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: false,
    style: 'Plain List',
    indicator: false,
  },
};

export const flushList = {
  args: {
    type: 'Unordered List',
    nested: false,
    external: false,
    style: 'Flush List',
    indicator: false,
  },
};

export const lowerAlphaList = {
  args: {
    type: 'Ordered List',
    nested: true,
    external: false,
    style: 'Lower Alpha List',
    indicator: false,
  },
};

export const upperAlphaList = {
  args: {
    type: 'Ordered List',
    nested: true,
    external: false,
    style: 'Upper Alpha List',
    indicator: false,
  },
};

export const lowerRomanList = {
  args: {
    type: 'Ordered List',
    nested: true,
    external: false,
    style: 'Lower Roman List',
    indicator: false,
  },
};

export const upperRomanList = {
  args: {
    type: 'Ordered List',
    nested: true,
    external: false,
    style: 'Upper Roman List',
    indicator: false,
  },
};

export const alphaNumericRomanList = {
  args: {
    type: 'Ordered List',
    nested: true,
    external: false,
    style: 'Alpha Numeric Roman List',
    indicator: false,
  },
};
