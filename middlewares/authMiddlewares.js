const passport = require('passport');

// By default passport wants to make a cookie based authentication for the user
// in our case, we are using tokens so we set this to false
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });


module.exports = {
  requireAuth,
  requireSignIn
};