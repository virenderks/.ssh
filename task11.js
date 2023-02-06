<div class="container">
  <form id="user-form">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
    </div>
    <button type="submit">Submit</button>
  </form>
<script> 
     </script>
    function saveToLocalStorage(event) {
        const form = document.querySelector('#user-form');

        form.addEventListener('submit', (event) => {
          event.preventDefault();
        
          const name = document.querySelector('#name').value;
          const email = document.querySelector('#email').value;
        
          const user = { name, email };
          const users = JSON.parse(localStorage.getItem('users')) || [];
          users.push(user);
        
          localStorage.setItem('users', JSON.stringify(users));
        });
        


