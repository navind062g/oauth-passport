const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const dotenv = require('dotenv').config();
const User = require('../models/user-model');

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

        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser) {
                console.log("Existing User", currentUser);
            }
            else {
                new User({
                    userName: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('New User has been created: '+newUser);
                }
                );
            }
        });
    })
);