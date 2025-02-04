/**
* Handles user logout by making a request to the logout API endpoint 
* and redirecting to the homepage on success
*/
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

// Initialize logout button handler if it exists
if (document.querySelector('#logout')) {
  document.querySelector('#logout').addEventListener('click', logout);
}