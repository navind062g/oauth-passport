const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config(); 

const app = express();

//set up view engine
app.set('view engine', 'ejs');

//set up the mongo database
mongoose.connect(process.env.MONGO_DB_STRING, () => {
    console.log('Connected to Mongo DB.');
})

//set up routes
app.use('/auth', authRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
})