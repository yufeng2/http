let http = require("http");

// 当服务器接收到请求，会自动调用回调
// request: 获得与请求相关的信息
// response: 输出与响应相关的信息
let server = http.createServer(function(request, response) {
	console.log("accept request");
	
	response.statusCode = 200;
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	
	// response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	response.write("<h1>您好！</h1>");
	response.end();
});

// 当服务器启动后的回调
let port = process.argv[2] || 3000;
server.listen(port, function() {
	console.log("http://localhost:" + port);
});