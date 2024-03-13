const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

//Database Connect
mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database Connected")
});

//Folders 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Show the Info
app.get('/', (req,res) => {
    res.render('home')
})

//Local Host 
app.listen(3000, () => {
    console.log('SERVING ON PORT 3000')
})