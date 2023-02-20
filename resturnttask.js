<!DOCTYPE html>
<html>
<head>
	<title>Restaurant Order System</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="wrapper">
		<h1>Restaurant Order System</h1>
		<form id="order-form">
			<label for="table">Select Table:</label>
			<select name="table" id="table">
				<option value="table1">Table 1</option>
				<option value="table2">Table 2</option>
				<option value="table3">Table 3</option>
			</select>
			<label for="item">Select Item:</label>
			<select name="item" id="item">
				<option value="chicken-tikka">Chicken Tikka</option>
				<option value="paneer-makhani">Paneer Makhani</option>
				<option value="butter-naan">Butter Naan</option>
				<!-- Add more items here -->
			</select>
			<label for="price">Price:</label>
			<input type="number" name="price" id="price" placeholder="Price">
			<input type="submit" value="Add to Order">
		</form>
		<div id="order-details">
			<h2>Table 1 Order Details</h2>
			<ul>
				<li>Chicken Tikka - $10.99 <button class="delete">Delete</button></li>
				<li>Paneer Makhani - $9.99 <button class="delete">Delete</button></li>
				<!-- Add more items here -->
			</ul>
		</div>
		<div id="total-bill">
			<h2>Total Bill</h2>
			<p>$20.98</p>
		</div>
	</div>
	<script src="app.js"></script>
</body>
</html>
