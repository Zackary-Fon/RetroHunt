const express = require('express');
const app = express();
const UsersRoutes = require('../route/annonce')
const bodyParser = require('body-parser')

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('views'));
app.use('/',UsersRoutes)
app.set("json spaces",2)

module.exports = app;