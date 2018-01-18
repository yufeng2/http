let http = require("http");
let qs = require("querystring");

let data = "{\"data\": [\"Java\", \"MySQL\", \"PHP\"]}";

let server = http.createServer(function(request, response) {
	response.statusCode = 200;
	
	let url = request.url;
	
	if (url == "/favicon.ico")
		return;
	
	let path = url.split(/\?/)[0];
	let query = url.split(/\?/)[1];
	
	let paramsObj = qs.parse(query);
	
	if (paramsObj.cb) {
		// 显示回调函数封装的结果
		response.setHeader('Content-Type', 'text/plain; charset=utf-8');
		response.write(paramsObj.cb + "("+data+")");
	} else {
		// 显示json对象字符串
		response.setHeader('Content-Type', 'text/json; charset=utf-8');
		response.write(data);
	}
	
	response.end();
});

let port = process.argv[2] || 3000;
server.listen(port, function() {
	console.log("http://localhost:" + port);
});