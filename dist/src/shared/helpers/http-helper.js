"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.serverError = exports.badRequest = void 0;
const errors_1 = require("../errors");
const badRequest = (error, statusCode = 400) => ({
    statusCode: error.statusCode || 400,
    body: error,
});
exports.badRequest = badRequest;
const serverError = () => ({
    statusCode: 500,
    body: new errors_1.ServerError(),
});
exports.serverError = serverError;
const success = (data, statusCode = 200) => ({
    statusCode,
    body: data,
});
exports.success = success;
//# sourceMappingURL=http-helper.js.map