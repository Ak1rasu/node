var http = require('http');

const server = http.createServer();

function onConnect(req, res){
    fetch('http://www.nos.nl')
}

server.on('request', onConnect);

server.listen(8080)