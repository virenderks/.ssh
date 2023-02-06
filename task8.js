
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <title>Item Lister</title>
</head>
<div id="form">
  <ul>
    <li> Hello World</li>
    <li id="item1">Item 1</li>
    <li id="item2">Item 2</li>
    <li id="item3">Item 3</li>
    <li id="item4">Item 4</li>
  </ul>
</div>

<body>
  <header id="main-header" class="bg-success text-white p-4 mb-3">
    <div class="container">
      <h1 id="header-title">Item Lister <span style="display:none">123</span></h1>
    </div>
  </header>
  <div class="container">
   <div id="main" class="card card-body">
    <h2 class="title">Add Items</h2>
    <form class="form-inline mb-3">
      <input type="text" class="form-control mr-2">
      <input type="submit" class="btn btn-dark" value="Submit">
    </form>
    <h2 class="title">Items</h2>
    <ul id="items" class="list-group">
      <li class="list-group-item">Item 1</li>
      <li class="list-group-item">Item 2</li>
      <li class="list-group-item">Item 3</li>
      <li class="list-group-item">Item 4</li>
    </ul>
   </div>
  </div>

</body>
</html>

<div id="item-lister">
  <h3>Item Lister</h3>
  <ul id="item-list">
    <li id="item-template" style="display:none;">
      <span class="item-text"></span>
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Edit</button>
    </li>
  </ul>
  <input type="text" id="item-input">
  <button id="add-item-btn">Add Item</button>
</div>
<script>
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



<script src="main.js"></script>


</body>

</html>

