export const createCard = ({
  cardType = 'basic',
  image = true,
  title,
  body,
  linkTitle,
  linkURL,
  cardBackground,
  cardDate = false,
  cardByLine = false,
}) => {
  const card = document.createElement('article');
  card.innerHTML = `
    ${image ? '<img class="ucla-card__image" src="https://designsystem.brand.ucla.edu/build/v2.4.2/theme-assets/img/examples/event-card-example-1.jpg" alt="Two children on their phones under the blankets"/>' : ''}
    <div class="ucla-card__body">
      ${cardDate ? '<p class="ucla-card__date">September 02, 2021</p>' : ''}
      <h1 class="ucla-card__title"><span>${title}</span></h1>
      ${cardByLine ? '<p class="ucla-card__author">By Joe Bruin</p>' : ''}
      <p class="ucla-card__description">${body}</p>
      <a href="${linkURL}" class="ucla-card__link">
        ${linkTitle}
      </a>
    </div>
    `;

  card.className = ['ucla-card', `ucla-card__${cardType}`, `ucla-has-background-${cardBackground}`].join(' ');

  return card;
};
