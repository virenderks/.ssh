let products = [];

function addProduct() {
  const productName = document.getElementById("product-name").value;
  const sellingPrice = parseFloat(document.getElementById("selling-price").value);
  const stockValue = parseInt(document.getElementById("stock-value").value);
  const totalPrice = sellingPrice * stockValue;
  
  const product = { productName, sellingPrice, stockValue, totalPrice };
  products.push(product);
  
  displayProducts();
}

function deleteProduct(index) {
  products.splice(index, 1);
  
  displayProducts();
}

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  let totalValue = 0;
  
  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.productName}</td>
      <td>${product.sellingPrice}</td>
      <td>${product.stockValue}</td>
      <td>${product.totalPrice}</td>
      <td><button onclick="deleteProduct(${index})">Delete</button></td>
    `;
    productList.appendChild(row);
    
    totalValue += product.totalPrice;
  });
  
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerHTML = totalValue;
}
