export const createParagraphs = ({
  copy,
  lead = false,
  small = false,
  paragraphs = 1,
}) => {
  const multiParagraph = document.createElement('div');
  const body = document.createElement('p');
  const body2 = document.createElement('p');
  const body3 = document.createElement('p');
  const smallBody = document.createElement('small');

  if (lead) {
    body.className = 'lead';
  }

  if (small) {
    smallBody.innerText = copy;
    body.append(smallBody);
  } else {
    body.innerText = copy;
  }

  if (paragraphs > 1) {
    switch (paragraphs) {
      case 2:
        body2.innerText = copy;
        multiParagraph.append(body);
        multiParagraph.append(body2);
        break;
      case 3:
        body2.innerText = copy;
        body3.innerText = copy;
        multiParagraph.append(body);
        multiParagraph.append(body2);
        multiParagraph.append(body3);
        break;
    }
    return multiParagraph;
  } else {
    return body;
  }
};
