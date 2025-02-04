/**
* Sets up comment editing functionality by handling edit, save, cancel,
* and delete actions through event delegation on the comments list.
* Manages the visibility of edit forms and handles API requests for
* updating and deleting comments.
*/
const setupCommentEditing = () => {
  const commentsList = document.querySelector('#comments-list');
  if (!commentsList) return;

  commentsList.addEventListener('click', async (event) => {
    const target = event.target;
    const commentCard = target.closest('.card');

    // Shows or hides the edit form and comment content
    const toggleEditForm = (show) => {
      const contentDiv = commentCard.querySelector('.comment-content');
      const editForm = commentCard.querySelector('.edit-form');

      if (show) {
        contentDiv.classList.add('d-none');
        editForm.classList.remove('d-none');
      } else {
        contentDiv.classList.remove('d-none');
        editForm.classList.add('d-none');
      }
    };

    if (target.matches('.edit-comment-btn')) {
      toggleEditForm(true);
    }

    if (target.matches('.cancel-edit-btn')) {
      toggleEditForm(false);
    }

    if (target.matches('.save-comment-btn')) {
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
            commentCard.querySelector('.comment-text').textContent = newText;
            toggleEditForm(false);
          } else {
            alert('Failed to update comment');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while updating the comment');
        }
      }
    }

    if (target.matches('.delete-comment-btn')) {
      if (confirm('Are you sure you want to delete this comment?')) {
        const commentId = commentCard.dataset.commentId;

        try {
          const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
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