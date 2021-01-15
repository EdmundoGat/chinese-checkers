const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('join room', (data) => {
        socket.join(data.room);
        io.to(data.room).emit('player connection', data);
    });

    socket.on('room move', (channel, board) =>{
      io.to(channel).emit('player move', board);
    })

});

http.listen(8080, () => {
    console.log('Started on port: 8080');
});