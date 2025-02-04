/**
* Authentication middleware that checks if a user is logged in.
* Redirects to the login page if not authenticated, otherwise
* continues to the next middleware.
*/
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;