let http = require("http");
let qs = require("querystring");

let server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	// console.log(request.method, request.url);
	
	// 根据不同请求url显示不同信息
	// / 			显示首页
	// /login		显示登录表单
	// /xxx			显示404错误
	
	let url = request.url;
	
	if (url == "/favicon.ico")
		return;
	
	let path = url.split(/\?/)[0];
	let query = url.split(/\?/)[1];
	
	switch (path) {
		case "/":			// 首页
			req_homepage(response);
			break;
		case "/main":		// 登录表单
			req_main(response);
			break;
		case "/login":
			req_login(response, query);		// 判断登录
			break;
		default:
			req_404(response);
			break;
	}
	
	response.end();
});

function req_404(response) {
	response.statusCode = 404;
	response.write("<h1>Page not found</h1>");
}

function req_homepage(response) {
	response.write("<h1>欢迎！</h1>");
}

function req_main(response, flag=true) {
	if (!flag) {
		response.write("登录失败！");
	}
	response.write("<form action='login'>");
	response.write("姓名：<input name='uname' /><br/>");
	response.write("密码：<input name='upass' type='password' /><br/>");
	response.write("<input type='submit' />");
	response.write("</form>");
}

function req_login(response, query) {
	let paramsObj = qs.parse(query);
	if (paramsObj.uname == paramsObj.upass) {
		response.write("成功登录！");
	} else {
		req_main(response, false);
	}
}

let port = process.argv[2] || 3000;
server.listen(port, function() {
	console.log("http://localhost:" + port);
});