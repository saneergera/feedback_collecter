const passport = require('passport');
const googleAuth = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');


passport.use( new googleAuth({

      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'

    }, (accessToken,refreshToken,profile,done) => {

      console.log("accessToken:",accessToken);
      console.log("refreshToken",refreshToken);
      console.log("profile",profile);
      console.log("done",done)


    }));
