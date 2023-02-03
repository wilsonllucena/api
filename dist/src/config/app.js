"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("@shared/container");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
const middleware_1 = __importDefault(require("./middleware"));
const app = (0, express_1.default)();
(0, middleware_1.default)(app);
(0, routes_1.default)(app);
exports.default = app;
//# sourceMappingURL=app.js.map