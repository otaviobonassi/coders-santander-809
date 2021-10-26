import { addItemToList } from './html-handlers.js';

export const handleClick = (targetClick, input) => {
  const list = document.querySelector('ol');
  targetClick.addEventListener('click', () => {
    const value = input.value;
    if (value.trim()) {
      addItemToList(list, value);
      input.value = '';
    };
  })
}