var http = require('http');

const server = http.createServer();

function onConnect(req, res){
    res.write('hello world');
    res.end();
}

server.on('request', onConnect);

server.listen(8000)