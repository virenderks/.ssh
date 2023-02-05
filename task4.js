
var list = document.createElement("ul");
var item1 = document.createElement("li");
item1.innerHTML = "Item 1";
var item2 = document.createElement("li");
item2.innerHTML = "Item 2";
var item3 = document.createElement("li");
item3.innerHTML = "Item 3";
var item4 = document.createElement("li");
item4.innerHTML = "Item 4";

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);

document.body.appendChild(list);

// Make the 3rd item have a green background color
item3.style.backgroundColor = "green";

var items = list.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
