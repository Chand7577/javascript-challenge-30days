// server.js
const WebSocket = require('ws');
const http = require('http');
const readlineSync = require('readline-sync');
// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('WebSocket server is running\n');
});

// Create a WebSocket server and attach it to the HTTP server
const wss = new WebSocket.Server({
    server
});

// Set up event listeners for the WebSocket server
wss.on('connection', (ws) => {
    console.log('New client connected');

    // Handle messages from clients
    ws.on('message', (message) => {
        console.log('Received from client:', message.toString('utf-8'));
        // Send a response back to the client
        const prompt = readlineSync.question("Enter");
        ws.send(prompt);
    });

    // Handle client disconnections
    ws.on('close', () => {
        console.log('Client disconnected');
    });

    // Handle errors
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

// Start the HTTP server on port 8000
server.listen(8000, () => {
    console.log('Server is listening on http://localhost:8000');
});