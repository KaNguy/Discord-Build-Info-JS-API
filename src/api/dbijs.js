const { ClientBuild } = require('discord-build-info-js');
const clientBuild = new ClientBuild();

module.exports = {
    run: async(request, response, options) => {
        if (request.url === '/build' || request.url === '/build/') {
            return options.methods.handleError(response, 404);
        }

        if (request.method !== "GET") {
            return options.methods.methodsObj[request.method](request, response);
        }

        if (/\/build\/([-_a-z0-9]+)\/([-_a-z0-9]+)/.exec(request.url) && /\/build\/([-_a-z0-9]+)\/([-_a-z0-9]+)/.exec(request.url)[1]) {
            return options.methods.handleError(response, 404);
        }

        if (/\/build\/([-_a-z0-9]+)/.exec(request.url) && /\/build\/([-_a-z0-9]+)/.exec(request.url)[1]) {
            clientBuild.getClientBuildInfo(/\/build\/([-_a-z0-9]+)/.exec(request.url)[1]).then(data => {
                return options.methods.handleGetRequest(request, response, { data: data });
            }).catch(error => {
                error ? function() {
                    return options.methods.handleError(response, 404);
                }() : {};
            });
        } else {
            return options.methods.handleError(response, 404);
        }
    }
}