"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_adapter_1 = require("../../../shared/adapters/express-adapter");
const accounts_factory_1 = require("../factory/accounts.factory");
exports.default = (router) => {
    router.get('/accounts', (0, express_adapter_1.adapterRoute)((0, accounts_factory_1.makeListAccountController)()));
    router.get('/account/:id', (0, express_adapter_1.adapterRoute)((0, accounts_factory_1.makeGetAccountController)()));
    router.post('/account', (0, express_adapter_1.adapterRoute)((0, accounts_factory_1.makeCreateAcccountController)()));
    router.patch('/account/:id', (0, express_adapter_1.adapterRoute)((0, accounts_factory_1.makeUpdateAccountController)()));
    router.delete('/account/:id', (0, express_adapter_1.adapterRoute)((0, accounts_factory_1.makeDeleteAccountController)()));
};
//# sourceMappingURL=account.route.js.map