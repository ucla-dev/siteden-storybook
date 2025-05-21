import { createParagraphs} from './Paragraphs';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Content/Paragraphs',
  tags: ['autodocs'],
  render: ({ copy, ...args }) => {
    return createParagraphs({ copy, ...args });
  },
  argTypes: {
    copy: { control: 'text' },
    lead: { control: 'boolean' },
    small: { control: 'boolean' },
    paragraphs: {
      control: {
        type: 'number',
        min: 1,
        max: 3,
        step: 1
      }
    },
  }
};

export const paragraph = {
  args: {
    copy: 'This is a paragraph. Fames taciti aenean metus quam platea finibus. Ridiculus justo cras montes cursus euismod mattis eleifend litora curabitur. Lorem class iaculis nisl sit torquent vulputate vel nunc consequat.',
    lead: false,
    small: false,
    paragraphs: 1,
  },
};

export const leadText = {
  args: {
    copy: 'This is a paragraph. Fames taciti aenean metus quam platea finibus. Ridiculus justo cras montes cursus euismod mattis eleifend litora curabitur. Lorem class iaculis nisl sit torquent vulputate vel nunc consequat.',
    lead: true,
    small: false,
    paragraphs: 1,
  },
};

export const smallText = {
  args: {
    copy: 'This is a paragraph. Fames taciti aenean metus quam platea finibus. Ridiculus justo cras montes cursus euismod mattis eleifend litora curabitur. Lorem class iaculis nisl sit torquent vulputate vel nunc consequat.',
    lead: false,
    small: true,
    paragraphs: 1,
  },
};

export const paragraphFlow = {
  args: {
    copy: 'This is a paragraph. Fames taciti aenean metus quam platea finibus. Ridiculus justo cras montes cursus euismod mattis eleifend litora curabitur. Lorem class iaculis nisl sit torquent vulputate vel nunc consequat.',
    lead: false,
    small: false,
    paragraphs: 3,
  },
};

// export default {
//   title: 'Content/Body'
// };

// export const Body = () => `
// <p>This is a paragraph. Fames taciti aenean metus quam platea finibus. Ridiculus justo cras montes cursus euismod mattis eleifend litora curabitur. Lorem class iaculis nisl sit torquent vulputate vel nunc consequat. Sollicitudin ultrices mauris consequat turpis sit egestas rhoncus curabitur pretium vestibulum.
// Eros porta praesent si mattis consectetur lacus nam hendrerit efficitur. Purus adipiscing ad feugiat aliquam accumsan eleifend taciti ex. Vestibulum scelerisque tristique bibendum maecenas ligula cras vel ipsum vehicula. Ridiculus morbi mauris mus donec enim faucibus montes fusce.
// Parturient nam massa consequat faucibus et aptent fames penatibus augue convallis. Arcu nostra ante ligula semper sagittis metus auctor. Sollicitudin letius ac egestas ante netus facilisi. Tortor ipsum lacinia cursus molestie mus aliquet massa blandit. Pretium fusce hendrerit non fames cubilia venenatis malesuada lorem suscipit. Venenatis consequat vitae morbi aenean quam pede metus penatibus. Adipiscing at viverra diam velit metus.
// Torquent ante ex consequat enim sollicitudin blandit. Facilisi odio suscipit efficitur nisi ornare aliquet hac. Phasellus consectetur tincidunt per nam sem. Dictum volutpat nostra maximus venenatis curae phasellus arcu euismod mus orci.</p>`
