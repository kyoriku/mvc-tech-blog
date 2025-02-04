/**
* Handles the deletion of a post with user confirmation, sending a DELETE
* request to the API and redirecting to the dashboard on success
*/
const deletePostHandler = async (event) => {
  event.preventDefault();

  if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
    const postId = event.target.dataset.postId;

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        window.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      alert('An unexpected error occurred. Please try again.');
    }
  }
};

// Initialize delete post handlers for all delete buttons
document.querySelectorAll('.delete-post-button').forEach((button) => {
  button.addEventListener('click', deletePostHandler);
});