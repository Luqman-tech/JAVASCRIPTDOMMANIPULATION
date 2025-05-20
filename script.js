// Change text content upon clicking button
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
  dynamicText.textContent = "Look, I just changed the text! 🎉";
});

// Change text color dynamically
const changeColorBtn = document.getElementById('change-color-btn');
const colorText = document.getElementById('color-text');

changeColorBtn.addEventListener('click', () => {
  // Pick color randomly
  const colors = ['red', 'blue', 'green', 'purple', 'orange'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorText.style.color = randomColor;
});

// Add and remove items in list dynamically
const addItemBtn = document.getElementById('add-item-btn');
const removeItemBtn = document.getElementById('remove-item-btn');
const itemList = document.getElementById('item-list');

let itemCount = 2; // initial list items count

addItemBtn.addEventListener('click', () => {
  itemCount++;
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${itemCount}`;
  itemList.appendChild(newItem);
});

removeItemBtn.addEventListener('click', () => {
  if (itemList.children.length > 0) {
    itemList.removeChild(itemList.lastElementChild);
    itemCount--;
  } else {
    alert("No more items to remove!");
  }
});
