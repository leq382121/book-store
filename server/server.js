const path = require("path");
const fs = require("fs");
const WebSocket = require("ws"); // new

const socketServer = new WebSocket.Server({ port: 3030 });
const bookObject = fs.readFileSync("./api_books.json", "utf8", (res, err) => {
  if (err) {
    console.log(err);
  }

  return res;
});

console.log(socketServer);

const messages = ["Start Chatting!"];

socketServer.on("connection", (socketClient) => {
  console.log("connected");
  console.log("Number of clients: ", socketServer.clients.size);

  socketClient.send(JSON.stringify(messages));

  socketClient.on("error", (err) => console.log(err));

  socketClient.on("message", (message) => {
    messages.push(message);

    socketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify([message]));
      }
    });
  });

  socketClient.on("close", (socketClient) => {
    console.log("closed");
    console.log("Number of clients: ", socketServer.clients.size);
  });
});

// Jei is bet kurio kliento pareina submit naujos knygos
// mes su socketu gaudom ta submita ir siunciam visiem esamiem atviriem
// prisijungimam nauja zinute, kuri updeitina knygu state
