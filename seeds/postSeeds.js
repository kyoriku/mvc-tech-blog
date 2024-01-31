// Import the Post model from the specified path
const { Post } = require('../models');

// Define an array of post data, each object representing a post with a title, content, and user ID
const postData = [
  {
    title: 'Introduction to Machine Learning',
    content: "Delve into the fascinating world of machine learning and gain insights into essential concepts and techniques. This exploration guides you through key principles, from understanding algorithms and data preprocessing to building and evaluating models. Covering a spectrum of best practices for beginners and seasoned machine learning enthusiasts alike, learn to leverage modern tools, adopt coding standards, and implement testing strategies. Enhance your understanding of machine learning, streamline collaboration, and elevate your skills in this rapidly evolving field.",
    user_id: 1,
  },
  {
    title: 'Building a RESTful API with Node.js and Express',
    content: "Embark on mastering the creation of robust, scalable RESTful APIs using Node.js and Express. Walk through setting up a powerful API, leveraging Node.js's asynchronous and event-driven architecture with Express. Learn to handle HTTP requests, design efficient endpoints, and implement CRUD operations. Cover best practices for code organization, error handling, and security, ensuring your API meets industry standards. Equip yourself with the skills to develop RESTful APIs, forming the backbone of modern web applications.",
    user_id: 2,
  },
  {
    title: 'Web Development Best Practices',
    content: "Dive into web development and discover essential best practices for clean, maintainable, and efficient code. This exploration guides you through key principles, from code structuring and version control to responsive design and optimizing performance. Covering a spectrum of best practices for beginners and seasoned developers alike, learn to leverage modern development tools, adopt coding standards, and implement testing strategies. Enhance code quality, streamline collaboration, and elevate your web development skills.",
    user_id: 3,
  },
  {
    title: 'Getting Started with React.js',
    content: "Embark on your React.js journey, exploring the JavaScript library revolutionizing user interface development. This beginner-friendly guide covers React.js fundamentals and guides you in building your first React application. Understand core concepts like components, props, and state, delving into the virtual DOM, JSX syntax, and component lifecycle. Whether you're a novice or experienced developer, this guide equips you with the knowledge to kickstart your React.js journey, creating powerful, modular, and efficient web applications.",
    user_id: 1,
  },
  {
    title: 'Cybersecurity Basics: Protecting Your Online Presence',
    content: "In an era where online security is paramount, explore fundamental cybersecurity practices to safeguard your digital presence. This comprehensive guide covers essential concepts, tools, and strategies, from understanding common attack vectors to implementing strong passwords and multi-factor authentication. Learn to recognize phishing attempts, secure network infrastructure, and maintain a resilient online presence. Whether an individual user or responsible for organizational assets, gain a solid foundation in cybersecurity basics.",
    user_id: 2,
  },
  {
    title: 'Mastering CSS Grid Layout',
    content: "Take a deep dive into CSS Grid Layout, a powerful tool for creating responsive and flexible web layouts. This comprehensive tutorial guides you through the intricacies of CSS Grid, providing a thorough understanding of its capabilities and applications in modern web design. From defining grid containers and items to utilizing grid lines, tracks, and areas, gain hands-on experience crafting sophisticated layouts. Explore responsive design with CSS Grid, complementing other layout techniques. Whether a web designer or developer, this guide equips you to master CSS Grid Layout, enhancing your web design capabilities and staying at the forefront of modern layout trends.",
    user_id: 4,
  },
];

// Define a function called seedPosts, which uses the bulkCreate method of the Post model to insert multiple posts into the database
const seedPosts = () => Post.bulkCreate(postData);

// Export the seedPosts function to be used in the database seed script: 'seed.js'
module.exports = seedPosts;
