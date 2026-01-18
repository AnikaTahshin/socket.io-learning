const express = require("express");
const app = express();
const http = require("http");

const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);

let buyNamespace = io.of("/buy")
buyNamespace.on("connection",(socket) =>{
buyNamespace.emit("MyEvent","Hello Buy")
})


let sellNamespace = io.of("/sell")
sellNamespace.on("connection",(socket) =>{
sellNamespace.emit("MyEvent","Hello Sell")
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  
});

expressServer.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
