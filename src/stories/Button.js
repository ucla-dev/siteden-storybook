import './button.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'ucla-btn--primary' : 'ucla-btn--secondary';
  btn.className = ['ucla-btn', `ucla-btn--${size}`, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
