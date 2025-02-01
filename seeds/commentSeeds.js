// Import the Comment model from the specified path
const { Comment } = require('../models');

// Define an array of comment data, each object representing a comment with associated text, user ID, and post ID
const commentData = [
  {
    comment_text: "Thanks for sharing your ML journey! I'm in week 2 of the same course. Quick tip: check out fast.ai too, they have a more practical approach that really clicked for me.",
    user_id: 2,
    post_id: 1,
    createdAt: new Date('2024-01-03T11:30:00'),
    updatedAt: new Date('2024-01-03T11:30:00')
  },
  {
    comment_text: "The rate limiting tip saved my API from a DDoS last week! Would love to see that deep dive, especially about handling rate limit errors gracefully on the client side.",
    user_id: 3,
    post_id: 2,
    createdAt: new Date('2024-01-12T16:45:00'),
    updatedAt: new Date('2024-01-12T16:45:00')
  },
  {
    comment_text: "Have you tried using React Query? We implemented it last sprint and it cut our bundle size by another 15%. Plus, the caching is *chef's kiss*",
    user_id: 4,
    post_id: 3,
    createdAt: new Date('2024-01-20T10:20:00'),
    updatedAt: new Date('2024-01-20T10:20:00')
  },
  {
    comment_text: "That Safari bug was driving me crazy too! Found a similar issue with grid-auto-flow: dense in iOS 14. Your solution is much cleaner than our hacky fix!",
    user_id: 1,
    post_id: 4,
    createdAt: new Date('2024-01-25T15:00:00'),
    updatedAt: new Date('2024-01-25T15:00:00')
  },
  {
    comment_text: "Question about the chart library - did you consider using Observable Plot instead? Curious about the bundle size comparison.",
    user_id: 5,
    post_id: 3,
    createdAt: new Date('2024-01-21T08:15:00'),
    updatedAt: new Date('2024-01-21T08:15:00')
  },
  {
    comment_text: "This resonates so much. We just implemented Jest snapshot testing and caught three potential regressions in our last PR. Better late than never!",
    user_id: 2,
    post_id: 5,
    createdAt: new Date('2024-01-31T09:45:00'),
    updatedAt: new Date('2024-01-31T09:45:00')
  }
];

// Define a function called seedComments, which uses the bulkCreate method of the Comment model to insert multiple comments into the database
const seedComments = () => Comment.bulkCreate(commentData);

// Export the seedComments function to be used in the database seed script: 'seed.js'
module.exports = seedComments;
