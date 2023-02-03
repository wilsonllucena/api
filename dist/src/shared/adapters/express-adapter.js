"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterRoute = void 0;
const adapterRoute = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            query: req.query,
            params: req.params,
            body: req.body,
        };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};
exports.adapterRoute = adapterRoute;
//# sourceMappingURL=express-adapter.js.map