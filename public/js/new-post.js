/**
* Handles new post form submission by creating a post via the API
* and redirecting to the dashboard on success. Validates that both
* title and content are provided.
*/
const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        window.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error('Error during new post creation:', error.message);
      alert('An unexpected error occurred. Please try again.');
    }
  }
};

// Initialize new post form handler
document
  .querySelector('#new-post-form')
  .addEventListener('submit', newPostFormHandler);