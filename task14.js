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
      
      
      localStorage.setItem("user", JSON.stringify(user));
      
      
      displayUsers();
    }
    
    function displayUsers() {
      
      let retrievedUser = JSON.parse(localStorage.getItem("user"));
      
      
      document.getElementById("output").innerHTML = 
        "<p>Name: " + retrievedUser.name + "</p>" + 
        "<p>Email: " + retrievedUser.email + "</p>" + 
        "<p>Phone: " + retrievedUser.phone + "</p>" + 
        "<button type='button' onclick='editUser()'>Edit</button>" + 
        "<button type='button' onclick='deleteUser()'>Delete</button>";
    }
    
    function editUser() {
      
      let retrievedUser = JSON.parse(localStorage.getItem("user"));
      
      
      document.getElementById("name").value = retrievedUser.name;
      document.getElementById("email").value = retrievedUser.email;
      document.getElementById("phone").value = retrievedUser.phone;
    }
    
    function deleteUser() {
      
      localStorage.removeItem("user");
      
      
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
