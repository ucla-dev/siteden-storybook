export default {
  title: 'Content/Type',
  tags: ['autodocs'],
};

export const typeface = () => `
  <h2 class="mb-4">Typeface</h2>
  <div class="mb-6"><code>font-family: "Helvetica", "Roboto", "Arial", sans-serif;</code></div>
  <div class="mb-4"><b>Examples:</b></div>
  <p>The Quick Brown Fox Jumps Over The Lazy Dog</p>
  <p><b>The Quick Brown Fox Jumps Over The Lazy Dog</b></p>
`
export const typeScale = () => `
  <h2>Type Scale</h2>
  <div>
    <span style="font-size: 12px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 14px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 16px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 18px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 20px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 24px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 28px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 36px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 48px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 54px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span style="font-size: 81px;">Aa</span>&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <div>
    <span>12px</span>&nbsp;&nbsp;
    <span>14px</span>&nbsp;&nbsp;
    <span>16px</span>&nbsp;&nbsp;
    <span>18px</span>&nbsp;&nbsp;
    <span>20px</span>&nbsp;&nbsp;
    <span>24px</span>&nbsp;&nbsp;
    <span>28px</span>&nbsp;&nbsp;&nbsp;&nbsp;
    <span>36px</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span>48px</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span>54px</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span>81px</span>
  </div>
`
export const prose = () => `
  <div class="mb-8">There is a special wrapper class <code>.ucla-prose</code> that effects the elements in the following comparison example.</div>
  <div class="ucla">
      <div class="col">
        <div class="ucla-prose">
        <h1>Prose Heading One</h1>
        <h2>Prose Heading One</h2>
        <h3>Prose Heading One</h3>
        <h4>Prose Heading One</h4>
        <h5>Prose Heading One</h5>
        <h6>Prose Heading One</h6>
        <p>Facilisis magna sagittis cubilia gravida pretium proin blandit ullamcorper mi nec. Enim taciti convallis imperdiet integer egestas senectus nullam netus dignissim quam pede.</p>
        <ul>
          <li>Lorem</li>
          <li>Ipsum
            <ul>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolar</li>
            </ul>
          </li>
          <li>Dolar</li>
        </ul>
      </div>
      </div>
      <div class="col">
        <div>
          <h1>Heading One</h1>
          <h2>Heading One</h2>
          <h3>Heading One</h3>
          <h4>Heading One</h4>
          <h5>Heading One</h5>
          <h6>Heading One</h6>
          <p>Facilisis magna sagittis cubilia gravida pretium proin blandit ullamcorper mi nec. Enim taciti convallis imperdiet integer egestas senectus nullam netus dignissim quam pede.</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum
              <ul>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolar</li>
              </ul>
            </li>
            <li>Dolar</li>
          </ul>
        </div>
      </div>
  </div>

`
