const http = require("http"); //creation serveur http
const port = process.env.PORT||3006; //creation du port
const app = require("../app/app"); //appeller de l app

const server = http.createServer(app); //creation du serveur avec app

server.listen(port,()=>{ //si connecté
    console.log("connection serveur")
});