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
      options: ['Unordered List', 'Ordered List'],
    },
    nested: { control: 'boolean' },
    style: {
      control: { type: 'select' },
      options: ['Inline List', 'Pipe List'],
    },
  }
};

export const unorderedLists = {
  args: {
    type: 'Unordered List',
    nested: false,
  },
};

export const orderedLists = {
  args: {
    type: 'Ordered List',
    nested: false,
  },
};
