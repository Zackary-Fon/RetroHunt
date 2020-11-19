const express = require('express');
const app = express();
const UsersRoutes = require('../route/annonce')
const bodyParser = require('body-parser')
const cors= require('cors');

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('views'));

app.use('/',UsersRoutes)
app.set("json spaces",2)

module.exports = app;