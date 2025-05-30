export const createInlineStyles = ({
  text,
  element,
  style,
}) => {
  const inlineText = document.createElement('p');
  inlineText.innerText = 'This sentence contains text element as ';
  let tag = '';

  if (element) {
    switch (element) {
      case '-none-':
        tag = 'span';
        break;
      case 'Strong':
        tag = 'strong';
        break;
      case 'Bold':
        tag = 'b';
        break;
      case 'Emphasis':
        tag = 'em';
        break;
      case 'Strike':
        tag = 'del';
        break;
      case 'Inserted':
        tag = 'ins';
        break;
      case 'Marked':
        tag = 'mark';
        break;
      case 'Code':
        tag = 'code';
        break;
    }
  }

  if (style) {
    switch (style) {
      case 'Large Text':
        style = 'text-lg';
        break;
      case 'Small Text':
        style = 'text-sm';
        break;
      case 'Editorial Text':
        style = 'text-editorial';
        break;
      case 'Uppercase Text':
        style = 'ucla-text-uppercase'
        break;
      case 'Bold Text':
        style = 'ucla-text-bold'
        break;
    }
  }

  const el = document.createElement(tag);
  el.className = style;
  el.innerText = text;
  inlineText.append(el);
  inlineText.append('.')

  return inlineText;
};
