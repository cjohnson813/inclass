const http = require('http');
const fs = require('fs');
const url = require('url');

//call back function
serveStatic = function (req, res) {
	let fileName = '.' + url.parse(req.url).pathname;
	
	fs.readFile(fileName, function (err, data) {
		// 404 error for file not found
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.write('404 Not Found\n');
			res.end();
		}
		// serve contents of the file
		else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		}
	});
}
			

 
const myserver = http.createServer(serveStatic); //create a server object
myserver.listen(80, function() {console.log("Listening on port 80" )}); 

