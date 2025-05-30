export default {
  title: 'Content/Block Elements',
  tags: ['autodocs'],
};

export const horizontalRule = () => '<hr>'

export const blockQuote = () => `
  <figure class="blockquote">
    <blockquote cite="https://www.ucla.edu">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus justo eget erat vulputate porta. Nam pharetra hendrerit accumsan.</p>
    </blockquote>
    <figcaption>First Name Last Name<br/><em>Title</em><br /><cite>Source</cite></figcaption>
  </figure>
`
