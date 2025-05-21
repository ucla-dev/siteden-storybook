export const createLists = ({
  type,
  nested = false,
  style,
}) => {
  const unorderedList = document.createElement('ul');
  const orderedList = document.createElement('ol');

  if (type == 'Unordered List') {
    for (let i = 0; i < 3; i++) {
      const i = document.createElement('li');
      i.innerText = 'Lorem ipsum dolar sit amet.';
      // if (nested == true && i == 2) {
      //   const ulNest = document.createElement('ul')
      //   for (let x = 0; x < 3; i++) {
      //     const x = document.createElement('li');
      //     x.innerText = 'Lorem ipsum dolar sit amet.';
      //     ulNest.append(x);
      //   }
      //   i.append(ulNest);
      // }
      unorderedList.append(i);
    }
    return unorderedList;
  } else if (type == 'Ordered List') {
    for (let i = 0; i < 3; i++) {
      const i = document.createElement('li');
      i.innerText = 'Lorem ipsum dolar sit amet.';
      orderedList.append(i);
    }
    return orderedList;
  } else if (type == 'Descriptive List') {
    return orderedList;
  }
};
