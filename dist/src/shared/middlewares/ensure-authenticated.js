"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const app_error_1 = require("../util/app-error");
async function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new app_error_1.AppError('Token missing');
    }
    const [, token] = authHeader.split(' ');
    try {
        const { sub: user_id } = (0, jsonwebtoken_1.verify)(token, '17bbe754d6d696c802d05c6f121e64a0');
        const userRepository = Object.create({
            findById: () => { }
        });
        const user = await userRepository.findById(user_id);
        if (!user) {
            throw new app_error_1.AppError('User does not exists');
        }
        request.user = {
            id: user_id,
        };
        next();
    }
    catch {
        throw new app_error_1.AppError('Invalid token');
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
//# sourceMappingURL=ensure-authenticated.js.map