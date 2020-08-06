// https://github.com/theturtle32/WebSocket-Node
// https://stackoverflow.com/questions/22429744/how-to-setup-route-for-websocket-server-in-express
// https://github.com/websockets/ws/blob/master/doc/ws.md
// https://levelup.gitconnected.com/getting-started-with-node-js-and-websockets-f22dd0452105
// https://pusher.com/websockets
// https://davidwalsh.name/websocket
// https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://blogs.windows.com/windowsdeveloper/2016/03/14/when-to-use-a-http-call-instead-of-a-websocket-or-http-2-0/

https: const WebSocket = require("ws");
const bodyParser = require("body-parser");
const fs = require("fs");

let bookObject = fs.readFileSync("./api_books.json", "utf8", (res, err) => {
  if (err) {
    console.log(err);
  }

  return res;
});

const wss = new WebSocket.Server({ port: 3500 });

const duplex = WebSocket.createWebSocketStream(wss, { encoding: "utf8" });

duplex.pipe(process.stdout);
process.stdin.pipe(duplex);

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });

  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send("connected to the server");
      }
    });
  });

  ws.on("close", function close() {
    console.log("disconnected");
  });

  ws.send(bookObject);
});

// var WebSocketServer = require("websocket").server;
// var http = require("http");

// var server = http.createServer(function (request, response) {
//   console.log(new Date() + " Received request for " + request.url);
//   response.writeHead(404);
//   response.end();
// });

// server.listen(3500, function () {
//   console.log(new Date() + " Server is listening on port 3500");
// });

// wsServer = new WebSocketServer({
//   httpServer: server,
//   // You should not use autoAcceptConnections for production
//   // applications, as it defeats all standard cross-origin protection
//   // facilities built into the protocol and the browser.  You should
//   // *always* verify the connection's origin and decide whether or not
//   // to accept it.
//   autoAcceptConnections: false,
// });

// function originIsAllowed(origin) {
//   // put logic here to detect whether the specified origin is allowed.
//   return true;
// }

// wsServer.on("request", function (request) {
//   if (!originIsAllowed(request.origin)) {
//     // Make sure we only accept requests from an allowed origin
//     request.reject();
//     console.log(
//       new Date() + " Connection from origin " + request.origin + " rejected."
//     );
//     return;
//   }

//   var connection = request.accept("echo-protocol", request.origin);
//   console.log(new Date() + " Connection accepted.");

//   connection.on("message", function (message) {
//     if (message.type === "utf8") {
//       console.log("Received Message: " + message.utf8Data);
//       connection.sendUTF(message.utf8Data);
//     } else if (message.type === "binary") {
//       console.log(
//         "Received Binary Message of " + message.binaryData.length + " bytes"
//       );
//       connection.sendBytes(message.binaryData);
//     }
//   });

//   connection.on("close", function (reasonCode, description) {
//     console.log(
//       new Date() + " Peer " + connection.remoteAddress + " disconnected."
//     );
//   });
// });
