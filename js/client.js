//连接根路径
var socket = io.connect('http://localhost:3000');
//收到，名称为fromServer的消息，时，触发
socket.on('fromServer', function (data) {
   console.log(data);
   //向服务端发送消息，两个参数分别为消息名称和消息内容
   socket.emit('formClient', { hi: 'hello server' });
});
socket.on('broadcast', function (data) {
   console.log("broadcast");
});

//指定连接的路径
var chart = io.connect('http://localhost:3000/chat');
//收到，名称为fromChat的消息，时，触发
chart.on('fromChat', function (data) {
   console.log(data);
});
