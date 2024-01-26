// Asynchronous function to handle login form submission
const loginFormHandler = async (event) => {
  // Prevent the default form submission behavior, which would cause the page to reload
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Check if both email and password have values
  if (email && password) {
    // Send a POST request to the API endpoint for user login
    const response = await fetch('/api/users/login', {
      method: 'POST',
      // Convert the user input to JSON and include it in the request body
      body: JSON.stringify({ email, password }),
      // Specify the content type of the request body as JSON
      headers: { 'Content-Type': 'application/json' },
    });

    // Check if the response status is OK (200-299 range)
    if (response.ok) {
      // If the login is successful, redirect the browser to the home page
      document.location.replace('/');
    } else {
      // If the response status is not OK, show an alert with the status text
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);