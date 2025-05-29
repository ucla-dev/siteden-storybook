export const createLists = ({
  type,
  nested = false,
  indicator = false,
  external = false,
  style,
}) => {
  const unorderedList = document.createElement('ul');
  const orderedList = document.createElement('ol');
  const descriptiveList = document.createElement('dl');
  const unorderedListNested = document.createElement('ul')
  const orderedListNested = document.createElement('ol')
  let classList = '';

  // Build class list.
  if (style) {
    switch (style) {
      case '-none-':
        style = null;
        classList = '';
        break;
      case 'Bullet List':
        classList += 'list--bullet ';
        break;
      case 'Inline List':
        // From design system.
        classList += 'ucla-list__inline ';
        break;
      case 'Pipe List':
        classList += 'list--pipe ';
        break;
      case 'Link List':
        classList += 'list--link ';
        break;
      case 'Icon Link List':
        classList += 'list--link ';
        if (indicator) {
          classList += 'list--link-indicator ';
        }
        break;
      case 'Plain List':
        // From design system.
        classList += 'ucla-list__plain ';
        break;
      case 'Upper Alpha List':
        classList += 'list--upper-alpha ';
        break;
      case 'Lower Roman List':
        classList += 'list--lower-roman ';
        break;
      case 'Lower Alpha List':
        classList += 'list--lower-alpha ';
        break;
      case 'Alpha Numeric Roman List':
        classList += 'list--alpha-numeric-roman ';
        break;
    }
  }

  // Build the nested list.
  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.innerText = 'Lorem ipsum dolar sit amet.';
    if (type == 'Unordered List') {
      unorderedListNested.append(li);
    } else {
      orderedListNested.append(li);
    }
  }

  // Return Appropriate List.
  if (type == 'Unordered List') {
    for (let i = 0; i < 3; i++) {
      if (style == 'Link List' || style == 'Icon Link List') {
        const li = document.createElement('li');
        const link = document.createElement('a');
        if (external) {
          link.setAttribute('href', 'http://ucla.edu');
        } else {
          link.setAttribute('href', '/');
        }
        link.innerText = 'Lorem ipsum dolar sit amet.';
        li.append(link);
        unorderedList.append(li);
      } else {
        const li = document.createElement('li');
        li.innerText = 'Lorem ipsum dolar sit amet.';
        if (nested == true && i == 1) {
          li.append(unorderedListNested);
        }
        unorderedList.append(li);
      }
    }
    unorderedList.className = classList.trimEnd();
    return unorderedList;
  } else if (type == 'Ordered List') {
    for (let i = 0; i < 3; i++) {
      const li = document.createElement('li');
      li.innerText = 'Lorem ipsum dolar sit amet.';
      if (nested == true && i == 1) {
        li.append(orderedListNested);
      }
      orderedList.append(li);
    }
    orderedList.className = classList.trimEnd();
    return orderedList;
  } else if (type == 'Descriptive List') {
    for (let i = 0; i < 3; i++) {
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.innerText = 'Lorem ipsum dolar sit amet.';
      dd.innerText = 'Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum.';
      descriptiveList.append(dt);
      descriptiveList.append(dd);
    }
    return descriptiveList;
  }
};
