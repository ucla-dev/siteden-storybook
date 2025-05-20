export const createLink = ({
  source = 'Internal',
  text,
}) => {
  const linkElement = document.createElement('a');

  if (source == 'Internal') {
    linkElement.setAttribute('href', '/');

  } else {
    linkElement.setAttribute('href', 'http://ucla.edu');
    linkElement.className = 'ucla-link__has-icon ucla-link__has-icon--link-external';
  }

  linkElement.innerText = text;

  return linkElement;
};
