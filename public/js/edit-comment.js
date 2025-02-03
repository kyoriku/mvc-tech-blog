// Function to handle comment editing
const setupCommentEditing = () => {
  const commentsList = document.querySelector('#comments-list');
  if (!commentsList) return;

  // Handle edit button clicks
  commentsList.addEventListener('click', async (event) => {
    const target = event.target;

    // Edit button clicked
    if (target.matches('.edit-comment-btn')) {
      const commentCard = target.closest('.card');
      const contentDiv = commentCard.querySelector('.comment-content');
      const editForm = commentCard.querySelector('.edit-form');

      // Show edit form, hide content
      contentDiv.classList.add('d-none');
      editForm.classList.remove('d-none');
    }

    // Cancel button clicked
    if (target.matches('.cancel-edit-btn')) {
      const commentCard = target.closest('.card');
      const contentDiv = commentCard.querySelector('.comment-content');
      const editForm = commentCard.querySelector('.edit-form');

      // Hide edit form, show content
      contentDiv.classList.remove('d-none');
      editForm.classList.add('d-none');
    }

    // Save button clicked
    if (target.matches('.save-comment-btn')) {
      const commentCard = target.closest('.card');
      const commentId = commentCard.dataset.commentId;
      const newText = commentCard.querySelector('.edit-comment-text').value.trim();

      if (newText) {
        try {
          const response = await fetch(`/api/comments/${commentId}`, {
            method: 'PUT',
            body: JSON.stringify({ comment_text: newText }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            // Update the displayed comment text
            commentCard.querySelector('.comment-text').textContent = newText;

            // Hide edit form, show content
            commentCard.querySelector('.comment-content').classList.remove('d-none');
            commentCard.querySelector('.edit-form').classList.add('d-none');
          } else {
            alert('Failed to update comment');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while updating the comment');
        }
      }
    }

    // Delete button clicked
    if (target.matches('.delete-comment-btn')) {
      if (confirm('Are you sure you want to delete this comment?')) {
        const commentCard = target.closest('.card');
        const commentId = commentCard.dataset.commentId;

        try {
          const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            // Remove the comment from the page
            commentCard.remove();
          } else {
            alert('Failed to delete comment');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while deleting the comment');
        }
      }
    }
  });
};

// Initialize comment editing when the page loads
document.addEventListener('DOMContentLoaded', setupCommentEditing);
