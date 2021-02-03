const http = require('http');
const fs = require('fs');

let port = 8080;

let html = fs.readFileSync("index.html", "utf8");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(html);
    }

    require("./handlers/endpoint.js")(request, response);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Server URL: http://localhost:${port}`);
});