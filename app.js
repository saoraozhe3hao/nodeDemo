//引用核心模块
var fs = require('fs');
//引用node_module里面的第三方模块，用名称定位
var express = require('express');
var socketIO = require('socket.io');

//express模块是一个function，返回一个对象
var app = express();
//获取进程信息
var port = process.env.PORT || 3000;

//设置模板目录
app.set('views','./views');
//设置模板引擎,有jade,ejs 等
app.set('view engine','jade');
//监听端口
var server = app.listen(port);

var io = socketIO.listen(server);

console.log("HTTP server is listening at port "+port);

//路由设置
app.get('/',function(req,res){
    res.render('index',{
	    main:'首页'
	});
});
//获取参数
app.get('/:id',function(req,res){
    res.render('index',{
	    main:'首页' + req.params.id
	});
});

//读取文件
app.get('/js/:jsName',function(req,res){
    fs.readFile(__dirname + '/js/' + req.params.jsName,
      function (err, data) {
        res.writeHead(200);
        res.end(data);
    });
});



//建立websocket连接时触发
io.sockets.on('connection', function (socket) {
  //向客户端发送消息，两个参数分别为消息名称和消息内容
  socket.emit('fromServer', { hi: 'hello client' });
  //向，除本连接以外的，其他所有客户端的同名连接，广播
  socket.broadcast.emit('broadcast');
  //收到名称为formClient的消息时，触发
  socket.on('formClient', function (data) {
     console.log(data);
  });
  //断开连接时触发
  socket.on('disconnect', function () {
    io.sockets.emit('user disconnected');
  });
});

//划分连接的路径
var chart = io.of('/chat').on('connection', function (socket) {
  //以下两种写法都可以
  chart.emit('fromChat', { hi: 'lets chat 1' });
  socket.emit('fromChat', { hi: 'lets chat 2' });
});



