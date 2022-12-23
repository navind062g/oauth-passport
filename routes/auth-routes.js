const router = require('express').Router();
const passport = require('passport');


//login route
router.get('/login', (req, res)=> {
    res.render('login');
})

//auth logout
router.get('/logout', (req, res) => {
    res.send('Logging Out');
})

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route from google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('You have reached the callback URI');
});

module.exports = router;