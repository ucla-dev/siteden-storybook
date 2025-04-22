import { createCard } from './Card';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: ({ title, body, linkTitle, linkURL, ...args }) => {
    return createCard({ title, body, linkTitle, linkURL, ...args });
  },
  argTypes: {
    cardType: {
      control: { type: 'select' },
      options: ['basic', 'info', 'story-featured', 'story', 'story-secondary', 'event'],
    },
    image: { control: 'boolean' },
    title: { control: 'text' },
    body: { control: 'text' },
    linkTitle: { control: 'text' },
    linkURL: { control: 'text' },
    cardBackground: {
      control: { type: 'select' },
      options: ['white', 'ucla-blue', 'grey-05', 'grey-08', 'grey-10'],
    },
    cardDate: { control: 'boolean' },
    cardByLine: { control: 'boolean' },
  },
};

export const Basic = {
  args: {
    cardType: 'basic',
    image: true,
    title: 'How do parents embrace technology for kids, but prevent it from ruling the household?',
    body: 'With schools closed and remote learning the norm, how many hours of digital technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…',
    linkTitle: 'Learn More',
    linkURL: 'http://google.com',
    cardBackground: 'white',
    cardDate: false,
    cardByLine: false,
  },
};

export const Info = {
  args: {
    cardType: 'info',
    image: false,
    title: 'How do parents embrace technology for kids, but prevent it from ruling the household?',
    body: 'With schools closed and remote learning the norm, how many hours of digital technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…',
    linkTitle: 'Learn More',
    linkURL: 'http://google.com',
    cardBackground: 'grey-08',
  },
};

export const Story = {
  args: {
    cardType: 'story',
    image: true,
    title: 'How do parents embrace technology for kids, but prevent it from ruling the household?',
    body: 'With schools closed and remote learning the norm, how many hours of digital technology are acceptable for kids, and how much is too much? Can parents control when kids use tec…',
    linkTitle: 'Learn More',
    linkURL: 'http://google.com',
    cardBackground: 'white',
    cardDate: true,
    cardByLine: true,
  },
};
