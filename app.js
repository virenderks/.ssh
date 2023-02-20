 // Select the elements
const orderForm = document.getElementById('order-form');
const orderDetails = document.getElementById('order-details');
const table = document.getElementById('table');
const item = document.getElementById('item');
const price = document.getElementById('price');
const deleteButtons = document.querySelectorAll('.delete');
const totalBill = document.getElementById('total-bill').querySelector('p');

// Set the initial total bill value to 0
let total = 0;

// Add event listener to the order form
orderForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// Get the selected table, item, and price values
	const tableValue = table.value;
	const itemValue = item.value;
	const priceValue = price.value;

	// Create a new list item for the order details
	const listItem = document.createElement('li');
	listItem.textContent = `${itemValue} - $${priceValue} `;
	
	// Create a delete button for the list item
	const deleteButton = document.createElement('button');
	deleteButton.classList.add('delete');
	deleteButton.textContent = 'Delete';

	// Add the delete button to the list item
	listItem.appendChild(deleteButton);

	// Add the list item to the order
