'use strict';

const net = require('net');
const http = require('http');

const PROXY_PORT = 3080;
const HTTP_SERVER_PORT = 4080;

let proxy = net.createServer(socket => {
    socket.on('data', message => {
        console.log('---PROXY- got message', message.toString());

        let serviceSocket = new net.Socket();

        serviceSocket.connect(HTTP_SERVER_PORT, 'localhost', () => {
            console.log('---PROXY- Sending message to server');
            serviceSocket.write(message);
        });

        serviceSocket.on('data', data => {
            console.log('---PROXY- Receiving message from server', data.toString());
            socket.write(data);
        });
    });
});

let httpServer = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<html><body><p>Ciao!</p></body></html>');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Not Found');
    }
});

proxy.listen(PROXY_PORT);
httpServer.listen(HTTP_SERVER_PORT);