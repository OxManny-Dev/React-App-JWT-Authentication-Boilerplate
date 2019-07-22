const passport      = require('passport');
const User          = require('./../model/User');
const config        = require('./../config');
const JwtStrategy   = require('passport-jwt').Strategy;
const ExtractJwt    = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create Local Strategy

// By default localstrategy is expecting a username and a password
// With the config we setup below, it will look for an email instead and not a username
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if(!user) {
      return done(null, false);
    }
    user.comparePassword(password, (err, isMatch) => {
      if(err) {
        return done(err)
      }
      if(!isMatch) {
        return done(null, false);
      }

      // Passport attaches the user found here to req.user
      return done(null, user);
    });
  } catch(err) {
    done(err);
  }
});


// Setup options fot JWT Strategy
// We need to tell our strategy where to look for the token
const jwtOptions = {
  // Tells JWT strategy that whenever a request comes in
  // and we want passport to handle it,
  // it needs to look from the header, and more specifcally from the property called authorization
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // tells jwt strategy what secret we used to encode the token
  // so that it can decode it
  secretOrKey: config.secret
};


// We are going to get the payload argument from a request
// the payload argument is coming from the function we created in the authroutes
// done is the function we call once we've tried to authenticate this user
const jwtlogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  // see if user id in the payload exists in our database,
  try {
    const user = await User.findById(payload.sub);
    if(user) {
      // 1st arg to done is an error object and the 2nd is the user if we found one
      // if we found a user
      done(null, user);
    } else {
      // if we didnt find a user
      done(null, false);
    }
  } catch(e) {
    done(e, false);
  }



});
// Tells passport to use this strategy
passport.use(jwtlogin);
passport.use(localLogin);

