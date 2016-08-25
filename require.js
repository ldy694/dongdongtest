var myHttp = require('http');
myHttp.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.end('我是林兴栋喽');
}).listen(8888);
console.log('成功了')