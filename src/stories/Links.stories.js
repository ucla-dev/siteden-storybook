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

export const relatedLinks = () => `
  <a class="ucla-related-link" href="#">
    Lorem ipsum
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 16L2 16L2 2L9 2V0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.1 18 18 17.1 18 16L18 9L16 9V16ZM11 0V2L14.59 2L4.76 11.83L6.17 13.24L16 3.41L16 7H18V0L11 0Z" />
    </svg>
  </a>
`

