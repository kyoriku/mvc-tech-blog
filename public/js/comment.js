/**
* Extracts the post ID from the current URL by splitting the URL path
* and returning the last segment
*/
const getPostIdFromUrl = () => {
  const urlParts = window.location.toString().split("/");
  return urlParts[urlParts.length - 1];
};

/**
 * Handles the submission of a comment form by sending the comment data
 * to the API endpoint and reloading the page on success
 */
const commentFormHandler = async (event) => {
  event.preventDefault();
  const commentText = document.querySelector('#comment').value.trim();
  const postId = getPostIdFromUrl();

  if (commentText && postId) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ post_id: postId, comment_text: commentText }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

// Initialize comment form handler if the form exists
if (document.querySelector('#comment-form')) {
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
}