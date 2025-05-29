export const createInlineStyles = ({
  text,
  element,
}) => {
  const inlineText = document.createElement('p');
  inlineText.innerText = 'This sentence contains text element as ';
  let tag = '';

  if (element) {
    switch (element) {
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

  const el = document.createElement(tag);
  el.innerText = text;
  inlineText.append(el);
  inlineText.append('.')

  return inlineText;
};
