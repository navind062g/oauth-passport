const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv').config();

passport.use(
    new GoogleStrategy({
        //options for the strategy
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRETKEY
    },
    (accessToken, refreshToken, profile, done) => {
        //passport callback function
        console.log('You have reached the callback function');
        console.log(profile);
    })
);