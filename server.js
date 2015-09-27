//引用核心模块
var http = require('http');
//引用node_module里面的第三方模块，用名称定位
var express = require('express');
//引用本地模块，即引用了模块文件里的exports
var subServer = require('./subServer');

//创建服务器，指定监听端口
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	//模块成员的name，是模块成员所引用对象的标示符
    res.write('<h1>'+subServer.sub.name+'</h1>');
    res.end('<p>'+subServer.sub.age+'</p>');
	console.log(subServer);
}).listen(3000);
console.log("HTTP server is listening at port 3000.");