const input = document.querySelector('#search-input');
const itemList = document.querySelector('#item-list');

input.addEventListener('input', () => {
  const searchValue = input.value.toLowerCase();
  const items = itemList.querySelectorAll('li');
  
  items.forEach((item) => {
    const itemValue = item.textContent.toLowerCase();
    const itemDescription = item.dataset.description.toLowerCase();
    if (itemValue.includes(searchValue) || itemDescription.includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
