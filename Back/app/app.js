const express = require('express');
const app = express();
const UsersRoutes = require('../route/annonce')
const bodyParser = require('body-parser')
const cors= require('cors');
const io=require('socket.io')
var corsOptions={
  origin:"http://localhost:3000" //URL front
}
app.use(cors(corsOptions))
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
  app.use(function (err, req, res, next) {
    console.log('This is the invalid field ->', err.field)
    next(err)
  })

  io.sockets.on('connection', function (socket, pseudo) {
    
    // Dès qu'on nous donne un pseudo, 
    //on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function(pseudo) {
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', pseudo);
    });
    socket.on('typing', (data)=>{
        socket.broadcast.emit('display', data);})

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
        console.log(socket.pseudo+":"+message)
    }); 
});


app.use(express.static('views'));

app.use('/',UsersRoutes)
app.set("json spaces",2)

module.exports = app;