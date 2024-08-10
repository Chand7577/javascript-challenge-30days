const WebSocket = require('ws');
const readlineSync = require('readline-sync');

// Connect to the WebSocket server
const ws = new WebSocket('ws://localhost:8000');

// Event handler for when the connection is established
ws.on('open', () => {
    console.log('Connected to server');
    // Send a message to the server
    const message = readlineSync.question("Enter..");
    ws.send(message);
});

// Event handler for when a message is received from the server
ws.on('message', (message) => {
    console.log('Received from server:', message.toString('utf-8'));
});

// Event handler for when the connection is closed
ws.on('close', () => {
    console.log('Connection closed');
});

// Event handler for errors
ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

// // actual logic to send message from gui
// const button = document.querySelector(".smsger-send-btn");
// console.log(button);
// const input = document.querySelector(".msger-input");
// button.addEventListener("click", () => {
//     const message = input.value;
//     console.log(message);
// })