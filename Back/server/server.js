const http = require("http");
const port = process.env.PORT||6666;
const app = require("../app/app");

const server = http.createServer(app);

server.listen(port,()=>{
    console.log("connection serveur")
});