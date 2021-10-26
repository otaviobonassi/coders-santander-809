export const addItemToList = (target, valueToAdd) => {
  const listItem = document.createElement('li');
  listItem.innerText = valueToAdd;
  target.append(listItem);
}