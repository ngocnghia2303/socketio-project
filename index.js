const express = require('express');
const app = express();

//Engine EJS
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

//socket.io
io.on('connection', function(socket){
    console.log('có người kết nối :' + socket.id);
    // server đang lắng nghe client
    socket.on("demo", function(data){
        console.log(data)
    })
});






app.get('/', function(req, res){
    res.render('home.ejs');
})