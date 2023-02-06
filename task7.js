 
var form = document.querySelector("#form");


var firstChild = form.firstChild;


var lastChild = form.lastChild;


var firstLi = firstChild.firstElementChild;


var lastLi = lastChild.lastElementChild;

// Create a new text node with the string "Hello"
var helloText = document.createTextNode("Hello ");

// Insert the text node before the first li element
firstChild.insertBefore(helloText, firstLi);

// Create a new text node with the string "Hello"
var helloText2 = document.createTextNode("Hello ");

// Insert the text node before the first li element with id "item1"
var item1 = document.querySelector("#item1");
item1.parentElement.insertBefore(helloText2, item1);
