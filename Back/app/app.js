const express = require('express'); //declarations des modules utilisés
const app = express();
const UsersRoutes = require('../route/annonce');
const bodyParser = require('body-parser');
const cors= require('cors');
const io=require('socket.io');
var corsOptions={ //options d autorisation d acces
  origin:"http://localhost:3000" //URL front 
}
app.use(cors(corsOptions)) //instanciation reglees d acces
app.use(bodyParser.json()); //instanciation
app.use(express.json());//instanciation express
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false })) //instanciation parametre du body parser
app.use(function(req, res, next) { //autorisation pour fetch
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(function (err, req, res, next) {
    console.log('This is the invalid field ->', err.field)
    next(err)
  })

app.use('/',UsersRoutes) // instanciation ds routes
app.set("json spaces",2) 

module.exports = app; //Exportation