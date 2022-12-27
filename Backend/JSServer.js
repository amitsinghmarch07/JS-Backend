const http = require("node:http");

const restServer = http.createServer(handler);
console.log("Started listening");

restServer.listen(10000);

function handler(req, res) {
    console.log(req);

    res.write("Hello to backend buddy");

    res.end();
}
