"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveError = void 0;
const app_error_1 = require("../util/app-error");
function resolveError(err, request, response, next) {
    if (err instanceof app_error_1.AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
}
exports.resolveError = resolveError;
//# sourceMappingURL=resolve-error.js.map