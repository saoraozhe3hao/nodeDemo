//引用node_module里面的第三方模块，用名称定位
var express = require('express');

//express模块是一个function，返回一个对象
var app = express();
//获取进程信息
var port = process.env.PORT || 3000;

//设置模板目录
app.set('views','./views');
//设置模板引擎,有jade,ejs 等
app.set('view engine','jade');
//监听端口
app.listen(port);

console.log("HTTP server is listening at port "+port);

//路由设置
app.get('/',function(req,res){
    res.render('index',{
	    main:'首页'
	});
});

app.get('/:id',function(req,res){
    res.render('index',{
	    main:'首页'+req.id
	});
});



