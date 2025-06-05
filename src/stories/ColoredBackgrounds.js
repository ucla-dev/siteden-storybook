export const createColoredBackground = ({
  backgroundColor
}) => {
  const backgroundColorContainer = document.createElement('div');
  const formattedHTML = `
  <h1>Heading Styles</h1>
  <hr>
  <h1>Hello, Im an Primary Heading</h1>
  <h2>Hello, Im an Primary Heading</h2>
  <h3>Hello, Im an Primary Heading</h3>
  <h4>Hello, Im an Primary Heading</h4>
  <h5>Hello, Im an Primary Heading</h5>
  <h6>Hello, Im an Primary Heading</h6>
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

  <h1>Block Level Elements</h1>
  <hr>
  <figure class="blockquote">
    <blockquote cite="https://www.ucla.edu">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus justo eget erat vulputate porta. Nam pharetra hendrerit accumsan.</p>
    </blockquote>
    <figcaption>First Name Last Name<br/><em>Title</em><br /><cite>Source</cite></figcaption>
  </figure>

  <h1>Inline Elements</h1>
  <hr>
  <p>This sentence contains text element as <strong>strong</strong>.</p>
  <p>This sentence contains text element as <b>bold</b>.</p>
  <p>This sentence contains text element as <b>bold</b>.</p>
  <p>This sentence contains text element as <b>bold</b>.</p>
  <p>This sentence contains text element as <b>bold</b>.</p>
  <p>This sentence contains text element as <b>bold</b>.</p>
  <p>This sentence contains text element as <b>bold</b>.</p>
  <p>This sentence contains text element as <span class="text-lg">large text</span>.</p>
  <p>This sentence contains text element as <span class="text-sm">large text</span>.</p>
  <p>This sentence contains text element as <span class="text-editorial">large text</span>.</p>
  <p>This sentence contains text element as <span class="ucla-text-uppercase">uppercase text</span>.</p>

  <h1>Links</h1>
  <hr>
  <a href="/">Hello World, I'm an Internal Link </a><br>
  <a href="http://ucla.edu" class="ucla-link__has-icon ucla-link__has-icon--link-external">Hello World, I'm an External Link </a><br>
  <a class="ucla-related-link" href="#">
    Lorem ipsum
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 16L2 16L2 2L9 2V0L2 0C0.89 0 0 0.9 0 2L0 16C0 17.1 0.89 18 2 18L16 18C17.1 18 18 17.1 18 16L18 9L16 9V16ZM11 0V2L14.59 2L4.76 11.83L6.17 13.24L16 3.41L16 7H18V0L11 0Z" />
    </svg>
  </a>
  <h1>Lists</h1>
  <ul class=""><li>Lorem ipsum dolar sit amet.</li><li>Lorem ipsum dolar sit amet.</li><li>Lorem ipsum dolar sit amet.</li></ul>
  <ol class=""><li>Lorem ipsum dolar sit amet.</li><li>Lorem ipsum dolar sit amet.</li><li>Lorem ipsum dolar sit amet.</li></ol>
  <dl><dt>Lorem ipsum dolar sit amet.</dt><dd>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum.</dd><dt>Lorem ipsum dolar sit amet.</dt><dd>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum.</dd><dt>Lorem ipsum dolar sit amet.</dt><dd>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum.</dd></dl>
  <ul class="list--bullet"><li>Lorem ipsum dolar sit amet.</li><li>Lorem ipsum dolar sit amet.</li><li>Lorem ipsum dolar sit amet.</li></ul>
  <hr>
  `;

  if (backgroundColor) {
    switch (backgroundColor) {
      case "UCLA Blue":
        backgroundColorContainer.className = 'ucla-has-background-ucla-blue';
        break;
      case "Gray 8%":
        backgroundColorContainer.className = 'ucla-has-background-grey-08';
        break;
    }
  }

  backgroundColorContainer.innerHTML = formattedHTML;

  return backgroundColorContainer;
};
