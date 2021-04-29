const http = require('http');

class Handlers {
    constructor(options = {}) {
        this.options = options ? options : {};
    }

    handleGetRequest(request, response, options = {}) {
        if (request.method.toUpperCase() === "GET") {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            if (options.data) {
                return response.end(JSON.stringify(options.data, null, 3));
            }
        }
    }

    handlePostRequest(request, response) {
        if (request.method.toUpperCase() === "POST") {
            response.writeHead(200, { 'Content-Type': 'application/json' });

            let body = "";
            request.on("data", chunk => body += chunk.toString());
            request.on("end", () => {
                if (body.length > 1e7) {
                    response.end(JSON.stringify({ "error": http.STATUS_CODES[413] }, null, 3));
                }
                //const str = Buffer.concat(body).toString();
                //const json = JSON.parse(str);
                return http.STATUS_CODES[200];
            });
            return http.STATUS_CODES[200];
        }
    }

    handleDeleteRequest(request, response) {
        if (request.method.toLowerCase() === "DELETE") {
            response.writeHead(405, { 'Content-Type': 'application/json' });
            return response.end(JSON.stringify({ "error": http.STATUS_CODES[200] }, null, 3));
        }
    }

    handlePutRequest(request, response) {
        if (request.method.toLowerCase() === "PUT") {
            response.writeHead(405, { 'Content-Type': 'application/json' });
            return response.end(JSON.stringify({ "error": http.STATUS_CODES[405] }, null, 3));
        }
    }

    handlePatchRequest(request, response) {
        if (request.method.toLowerCase() === "PATCH") {
            response.writeHead(405, { 'Content-Type': 'application/json' });
            return response.end(JSON.stringify({ "error": http.STATUS_CODES[405] }, null, 3));
        }
    }

    handleError(response, code) {
        response.writeHead(404, { 'Content-Type': 'application/json' });
        response.statusCode = code;
        response.end(JSON.stringify({"error": http.STATUS_CODES[404]}, null, 3));
    }

    methodsObj = {
        "GET": this.handleGetRequest,
        "POST": this.handlePostRequest,
        "DELETE": this.handleDeleteRequest,
        "PUT": this.handlePutRequest,
        "PATCH": this.handlePatchRequest
    }
}

module.exports = Handlers;
