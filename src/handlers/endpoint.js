const fs = require('fs');
const Methods = require('./handlers.js');
const methods = new Methods();

module.exports = (request, response) => {
    fs.readdirSync('src/api').forEach(file => {
        if (file.endsWith("js")) {
            require(`../api/${file}`).run(request, response, { methods: methods });
        }
    });
}
