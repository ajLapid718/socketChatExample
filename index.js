var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket) {
//   console.log('a user connected');
//   socket.on('disconnect', function() {
//     console.log('user disconnected!');
//   });
// });

// Comment this out;
// io.on('connection', function(socket) {
//   socket.on('chat message', function(msg) {
//     console.log('message: ' + msg);
//   });
// });

// Emit(): Send an event to everyone;
// io.emit('some event', { for: 'everyone' });

// Broadcast(): Send a message to everyone except for a certain socket;
// io.on('connection', function(socket){
//   socket.broadcast.emit('hi');
// });

// Send a message to everyone, including the sender;
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function() {
  console.log('listening on port 3000!');
});
