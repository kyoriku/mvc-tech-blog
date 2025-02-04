/**
* Handles login form submission by validating credentials and making 
* an API request. Shows loading state and displays any error messages.
*/
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const errorMessageElement = document.getElementById('login-error-message');

  if (email && password) {
    showLoadingSpinner('login-spinner');

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        const errorMessage = await response.text();
        displayErrorMessage(errorMessageElement, errorMessage);
      }
    } catch (error) {
      console.error('Error during login:', error);
      displayErrorMessage(errorMessageElement, 'An unexpected error occurred.');
    } finally {
      hideLoadingSpinner('login-spinner');
    }
  }
};

/**
* Handles signup form submission by creating a new user account via API.
* Shows loading state and displays any validation errors.
*/
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const errorMessageElement = document.getElementById('signup-error-message');

  if (username && email && password) {
    showLoadingSpinner('signup-spinner');

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        const errorMessage = await response.text();
        displayErrorMessage(errorMessageElement, errorMessage);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      displayErrorMessage(errorMessageElement, 'An unexpected error occurred.');
    } finally {
      hideLoadingSpinner('signup-spinner');
    }
  }
};

// Controls visibility of loading spinner elements
const showLoadingSpinner = (spinnerId) => {
  const spinner = document.getElementById(spinnerId);
  if (spinner) {
    spinner.style.display = 'inline-block';
  }
};

const hideLoadingSpinner = (spinnerId) => {
  const spinner = document.getElementById(spinnerId);
  if (spinner) {
    spinner.style.display = 'none';
  }
};

/**
* Formats and displays error messages, handling both validation errors
* and general error messages. Converts technical errors into user-friendly text.
*/
const displayErrorMessage = (element, message) => {
  try {
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.errors && Array.isArray(parsedMessage.errors)) {
      const userFriendlyMessages = parsedMessage.errors.map(error => {
        if (error.validatorKey === 'isEmail') {
          return 'Invalid email address';
        } else if (error.validatorKey === 'len' && error.path === 'password') {
          return 'Password must be at least 8 characters long';
        } else {
          return 'Validation error: ' + error.message;
        }
      });

      element.textContent = userFriendlyMessages.join(', ');
    } else if (parsedMessage.message) {
      element.textContent = parsedMessage.message;
    } else {
      element.textContent = 'An unexpected error occurred.';
    }
  } catch (error) {
    element.textContent = message;
  }

  element.style.color = 'red';
  element.style.display = 'block';
};

// Initialize form handlers
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);