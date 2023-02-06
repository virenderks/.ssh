const form = document.querySelector('#user-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
});
