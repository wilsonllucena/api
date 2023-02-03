"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyParser = exports.cors = void 0;
const body_parser_1 = require("body-parser");
const cors = (request, response, next) => {
    response.set('access-control-allow-origin', '*');
    response.set('access-control-allow-methods', '*');
    response.set('access-control-allow-headers', '*');
    next();
};
exports.cors = cors;
exports.bodyParser = (0, body_parser_1.json)();
exports.default = (app) => {
    app.use(exports.bodyParser);
    app.use(exports.cors);
};
//# sourceMappingURL=middleware.js.map