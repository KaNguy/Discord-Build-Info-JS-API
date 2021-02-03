const http = require('http');

// Requiring index file to run it for the tests
require('../index.js');

let options = {
    hostname: `localhost`,
    method: "GET",
    path: "/build/canary",
    port: 8080
}

http.get(options, callback => {
    let body = "";
    callback.on("data", data => body += String(data));
    callback.on("end", () => console.log(body));
});