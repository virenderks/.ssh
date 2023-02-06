<!DOCTYPE html>
<html>
<head>
  <title>Add User Form</title>
  <script>
    function addUser() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      
      let user = { name: name, email: email, phone: phone };
      
      // Store the user object in local storage as a string
      localStorage.setItem("user", JSON.stringify(user));
      
      // Display the stored user object on the screen
      displayUsers();
    }
    
    function displayUsers() {
      // Retrieve the user object from local storage
      let retrievedUser = JSON.parse(localStorage.getItem("user"));
      
      // Display the retrieved user object on the screen
      document.getElementById("output").innerHTML = 
        "<p>Name: " + retrievedUser.name + "</p>" + 
        "<p>Email: " + retrievedUser.email + "</p>" + 
        "<p>Phone: " + retrievedUser.phone + "</p>" + 
        "<button type='button' onclick='deleteUser()'>Delete</button>";
    }
    
    function deleteUser() {
      // Remove the user object from local storage
      localStorage.removeItem("user");
      
      // Clear the display on the screen
      document.getElementById("output").innerHTML = "";
    }
  </script>
</head>
<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" required><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" required><br><br>
    <label for="phone">Phone:</label>
    <input type="text" id="phone" required><br><br>
    <button type="button" onclick="addUser()">Add User</button>
  </form>
  <div id="output"></div>
</body>
</html>
