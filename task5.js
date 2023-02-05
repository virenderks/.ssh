
var list = document.createElement("ul");
var item1 = document.createElement("li");
item1.innerHTML = "Item 1";
item1.className = "item";
var item2 = document.createElement("li");
item2.innerHTML = "Item 2";
item2.className = "item";
var item3 = document.createElement("li");
item3.innerHTML = "Item 3";
item3.className = "item";
var item4 = document.createElement("li");
item4.innerHTML = "Item 4";
item4.className = "item";

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);


document.body.appendChild(list);

// Add a new list item without a class name
var item5 = document.createElement("li");
item5.innerHTML = "Item 5";
list.appendChild(item5);

// Modify the new list item using getElementsByClassName
var elements = document.getElementsByClassName("item");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = "lightblue";
}

// Modify the new list item using getElementById
item5.id = "item5";
var item5Element = document.getElementById("item5");
item5Element.style.backgroundColor = "yellow";
