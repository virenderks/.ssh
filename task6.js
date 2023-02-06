document.getElementById("item2").style.backgroundColor = "green";
document.getElementById("item3").style.display = "none";
const items = document.querySelectorAll(".item");

// Change font color of the 2nd item
items[1].querySelector("input").style.color = "green";

// Change background color of odd items
for (let i = 0; i < items.length; i++) {
  if (i % 2 !== 0) {
    items[i].style.backgroundColor = "green";
  }
}
