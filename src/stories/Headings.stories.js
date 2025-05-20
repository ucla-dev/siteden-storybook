import { createHeading } from './Headings';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Content/Headings',
  tags: ['autodocs'],
  render: ({ text, ...args }) => {
    return createHeading({ text, ...args });
  },
  argTypes: {
    heading: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    style: {
      control: { type: 'select' },
      options: ['-none-', 'Heading - Gold Bar', 'Heading - Blue Ribbon', 'Heading - Gold Ribbon'],
    },
    link: { control: 'boolean' },
    text: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['-none-', 'Xtra Small', 'Small', 'Default', 'Medium', 'Large', 'Xtra Large'],
    },
  }
};

export const HeadingOne = {
  args: {
    heading: 'h1',
    text: 'Hello, I\m an Primary Heading',
    link: false,
  },
};
export const HeadingTwo = {
  args: {
    heading: 'h2',
    text: 'Hello, I\m an Secondary Heading',
    link: false,
  },
};
export const HeadingThree = {
  args: {
    heading: 'h3',
    text: 'Hello, I\m an Tertiary Heading',
    link: false,
  },
};
export const HeadingFour = {
  args: {
    heading: 'h4',
    text: 'Hello, I\m a Fourth Level Heading',
    link: false,
  },
};
export const HeadingFive = {
  args: {
    heading: 'h5',
    text: 'Hello, I\m a Fifth Level Heading',
    link: false,
  },
};
export const HeadingSix = {
  args: {
    heading: 'h6',
    text: 'Hello, I\m a Sixth Level Heading',
    link: false,
  },
};
