
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var environment = require('dotenv');
var apiRoutes = require('./routes/app-routes');
var websocket = require('./websocket/websocket');

var app = express();

var fs = require('fs');

app.use(express.static('public'));
const server = require('http').createServer(app);

environment.config();

//create socket io server for client - server comms
var io = require('socket.io')(server);

io.on('connection', (socket)=>{
    console.log('hello', socket);
    websocket.createConnection(socket);
});
io.on('error', (err)=>{
    console.log('Socket err', err);
    websocket.handleError(err)
});

app.use(bodyparser.json());
//app.use('', apiRoutes.initRoutes());

var dbConstring = process.env.DBCONString;
mongoose.connect(dbConstring, { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true })
.then(db=>{
    console.log('db connection established');
    server.emit('dbReady');
})
.catch(err=> console.log('Error establishing connection to db', err));

const port = process.env.PORT || 5000;

server.on('dbReady', ()=>{
    server.listen(port, ()=>{
        console.log('App listening on port '+ port);
    });
});

process.on('uncaughtException', (err)=>{
    // Note: after client disconnect, the subprocess will cause an Error EPIPE, which can only be caught this way.
    console.log(err)
    
});




