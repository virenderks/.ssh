

<!DOCTYPE html>
<html>
<head>
	<title>Expense Tracker</title>
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!-- Custom CSS -->
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<h1 class="text-center">Expense Tracker</h1>
				<form id="expense-form">
					<div class="form-group">
						<label for="amount">Amount:</label>
						<input type="number" min="0" step="0.01" class="form-control" id="amount" required>
					</div>
					<div class="form-group">
						<label for="description">Description:</label>
						<input type="text" class="form-control" id="description" required>
					</div>
					<div class="form-group">
						<label for="category">Category:</label>
						<select class="form-control" id="category" required>
							<option value="">Select Category</option>
							<option value="Food">Food</option>
							<option value="Transportation">Transportation</option>
							<option value="Shopping">Shopping</option>
							<option value="Bills">Bills</option>
							<option value="Others">Others</option>
						</select>
					</div>
					<button type="submit" class="btn btn-primary">Add Expense</button>
				</form>
				<table class="table table-striped" id="expense-list">
					<thead>
						<tr>
							<th>Date</th>
							<th>Description</th>
							<th>Category</th>
							<th>Amount</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script src="script.js"></script>
</body>
</html>

 