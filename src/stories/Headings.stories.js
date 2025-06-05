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
    text: 'Hello, I\'m an Primary Heading',
    link: false,
  },
};
export const HeadingTwo = {
  args: {
    heading: 'h2',
    text: 'Hello, I\'m an Secondary Heading',
    link: false,
  },
};
export const HeadingThree = {
  args: {
    heading: 'h3',
    text: 'Hello, I\'m an Tertiary Heading',
    link: false,
  },
};
export const HeadingFour = {
  args: {
    heading: 'h4',
    text: 'Hello, I\'m a Fourth Level Heading',
    link: false,
  },
};
export const HeadingFive = {
  args: {
    heading: 'h5',
    text: 'Hello, I\'m a Fifth Level Heading',
    link: false,
  },
};
export const HeadingSix = {
  args: {
    heading: 'h6',
    text: 'Hello, I\'m a Sixth Level Heading',
    link: false,
  },
};
export const HeadingGoldBar = {
  args: {
    heading: 'h2',
    text: 'Hello, I\'m a Heading With A Gold Bar Style',
    link: false,
    style: 'Heading - Gold Bar',
  },
};
export const HeadingBlueRibbon = {
  args: {
    heading: 'h2',
    text: 'Hello, I\'m a Heading With A Ribbon Style',
    link: false,
    style: 'Heading - Blue Ribbon',
  },
};
export const HeadingGoldRibbon = {
  args: {
    heading: 'h2',
    text: 'Hello, I\'m a Heading With A Ribbon Style Modifier',
    link: false,
    style: 'Heading - Gold Ribbon',
  },
};
export const sizeClasses = () => `
  <h4 class="mb-5">Provided Text Sizing Classes - Design System</h4>
  <table class="ucla-table ucla-table__border docs-table mb-5">
    <thead>
      <tr>
        <th><h5>Class</h5></th>
        <th><h5>Example Usage</h5></th>
        <th><h5>Result</h5></th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td><code>.headline-text__xs</code></td>
      <td><code>&lt;h1 class="headline-text__xs"&gt;Lorem Ipsum&lt;/h1&gt;</code></td>
      <td><h1 class="headline-text__xs">Lorem Ipsum</h1></td>
    </tr>
    <tr>
      <td><code>.headline-text__sm</code></td>
      <td><code>&lt;h1 class="headline-text__sm"&gt;Lorem Ipsum&lt;/h1&gt;</code></td>
      <td><h1 class="headline-text__sm">Lorem Ipsum</h1></td>
    </tr>
    <tr>
      <td><code>.headline-text</code></td>
      <td><code>&lt;h1 class="headline-text"&gt;Lorem Ipsum&lt;/h1&gt;</code></td>
      <td><h1 class="headline-text">Lorem Ipsum</h1></td>
    </tr>
    <tr>
      <td><code>.headline-text__md</code></td>
      <td><code>&lt;h6 class="headline-text__md"&gt;Lorem Ipsum&lt;/h6&gt;</code></td>
      <td><h6 class="headline-text__md">Lorem Ipsum</h6></td>
    </tr>
    <tr>
      <td><code>.headline-text__lg</code></td>
      <td><code>&lt;h6 class="headline-text__lg"&gt;Lorem Ipsum&lt;/h6&gt;</code></td>
      <td><h6 class="headline-text__lg">Lorem Ipsum</h6></td>
    </tr>
    <tr>
      <td><code>.headline-text__xl</code></td>
      <td><code>&lt;h6 class="headline-text__xl"&gt;Lorem Ipsum&lt;/h6&gt;</code></td>
      <td><h6 class="headline-text__xl">Lorem Ipsum</h6></td>
    </tr>
    </tbody>
  </table>
`;
export const linkedHeadings = () => `
  <h1><a href="#">Hello, Im an Primary Heading</a></h1>
  <h2><a href="#">Hello, Im an Primary Heading</a></h2>
  <h3><a href="#">Hello, Im an Primary Heading</a></h3>
  <h4><a href="#">Hello, Im an Primary Heading</a></h4>
  <h5><a href="#">Hello, Im an Primary Heading</a></h5>
  <h6><a href="#">Hello, Im an Primary Heading</a></h6>
  <hr>
  <h1 class="heading-bar"><a href="#">Hello, Im an Primary Heading</a></h1>
  <h2 class="heading-bar"><a href="#">Hello, Im an Primary Heading</a></h2>
  <h3 class="heading-bar"><a href="#">Hello, Im an Primary Heading</a></h3>
  <h4 class="heading-bar"><a href="#">Hello, Im an Primary Heading</a></h4>
  <h5 class="heading-bar"><a href="#">Hello, Im an Primary Heading</a></h5>
  <h6 class="heading-bar"><a href="#">Hello, Im an Primary Heading</a></h6>
  <hr>
  <h1 class="heading-ribbon"><a href="#">Hello, Im an Primary Heading</a></h1>
  <h2 class="heading-ribbon"><a href="#">Hello, Im an Primary Heading</a></h2>
  <h3 class="heading-ribbon"><a href="#">Hello, Im an Primary Heading</a></h3>
  <h4 class="heading-ribbon"><a href="#">Hello, Im an Primary Heading</a></h4>
  <h5 class="heading-ribbon"><a href="#">Hello, Im an Primary Heading</a></h5>
  <h6 class="heading-ribbon"><a href="#">Hello, Im an Primary Heading</a></h6>
  <hr>
  <h1 class="heading-ribbon heading-ribbon--ucla-gold"><a href="#">Hello, Im an Primary Heading</a></h1>
  <h2 class="heading-ribbon heading-ribbon--ucla-gold"><a href="#">Hello, Im an Primary Heading</a></h2>
  <h3 class="heading-ribbon heading-ribbon--ucla-gold"><a href="#">Hello, Im an Primary Heading</a></h3>
  <h4 class="heading-ribbon heading-ribbon--ucla-gold"><a href="#">Hello, Im an Primary Heading</a></h4>
  <h5 class="heading-ribbon heading-ribbon--ucla-gold"><a href="#">Hello, Im an Primary Heading</a></h5>
  <h6 class="heading-ribbon heading-ribbon--ucla-gold"><a href="#">Hello, Im an Primary Heading</a></h6>
`;
