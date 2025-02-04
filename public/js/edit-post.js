/**
* Extracts the post ID from the current URL by splitting the URL path
* and returning the last segment
*/
const getPostIdFromUrl = () => {
  const urlParts = window.location.toString().split('/');
  return urlParts[urlParts.length - 1];
};

/**
* Handles the submission of the edit post form by updating the post data
* via the API and redirecting to the dashboard on success. Validates that
* both title and content are provided.
*/
const editPostFormHandler = async (event) => {
  event.preventDefault();

  const postId = getPostIdFromUrl();
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        window.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      alert('An unexpected error occurred. Please try again.');
    }
  } else {
    alert('Title and content are required.');
  }
};

// Initialize edit post form handler
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editPostFormHandler);