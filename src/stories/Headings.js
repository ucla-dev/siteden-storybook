export const createHeading = ({
  heading = 'h1',
  style,
  link = false,
  text,
  size,
}) => {
  const headingElement = document.createElement(heading);
  const linkElement = document.createElement('a');
  let classList = '';

  if (link) {
    linkElement.setAttribute('href', '#');
    linkElement.innerText = text;
    headingElement.append(linkElement);
  } else {
    headingElement.innerText = text;
  }

  if (style) {
    switch (style) {
      case '-none-':
        style = null;
        classList = '';
        break;
      case 'Heading - Gold Bar':
        classList += 'heading-bar ';
        break;
      case 'Heading - Blue Ribbon':
        classList += 'heading-ribbon ';
        break;
      case 'Heading - Gold Ribbon':
        classList += 'heading-ribbon heading-ribbon--ucla-gold ';
        break;
    }
  }

  if (size) {
    switch (size) {
      case '-none-':
        style = null;
        classList = '';
        break;
      case 'Xtra Small':
        classList += 'headline-text__xs ';
        break;
      case 'Small':
        classList += 'headline-text__sm ';
        break;
      case 'Default':
        classList += 'headline-text ';
        break;
      case 'Medium':
        classList += 'headline-text__md ';
        break;
      case 'Large':
        classList += 'headline-text__lg ';
        break;
      case 'Xtra Large':
        classList += 'headline-text__xl ';
        break;
    }
  }

  headingElement.className = classList.trimEnd();

  return headingElement;
};
