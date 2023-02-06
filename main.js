var itemInput = document.querySelector("#item-input");
var addItemBtn = document.querySelector("#add-item-btn");
var itemList = document.querySelector("#item-list");
var itemTemplate = document.querySelector("#item-template");

addItemBtn.addEventListener("click", function() {
  var itemText = itemInput.value;
  if (!itemText) {
    return;
  }
  var newItem = itemTemplate.cloneNode(true);
  newItem.id = "";
  newItem.style.display = "block";
  newItem.querySelector(".item-text").textContent = itemText;
  var deleteBtn = newItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function() {
    itemList.removeChild(newItem);
  });
  itemList.appendChild(newItem);
  itemInput.value = "";
});

