"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteAccountController = exports.makeGetAccountController = exports.makeUpdateAccountController = exports.makeCreateAcccountController = exports.makeListAccountController = void 0;
require("reflect-metadata");
const list_accounts_controller_1 = require("../controllers/list-accounts.controller");
const tsyringe_1 = require("tsyringe");
const create_account_usecase_1 = require("../use-cases/create-account.usecase");
const create_account_controller_1 = require("../controllers/create-account.controller");
const update_account_usecase_1 = require("../use-cases/update-account.usecase");
const update_acccount_controller_1 = require("../controllers/update-acccount.controller");
const get_account_controller_1 = require("../controllers/get-account.controller");
const delete_account_controller_1 = require("../controllers/delete-account.controller");
const get_user_usecase_1 = require("../use-cases/get-user.usecase");
const delete_account_usecase_1 = require("../use-cases/delete-account.usecase");
const list_accounts_usecase_1 = require("../use-cases/list-accounts.usecase");
const makeListAccountController = () => {
    const listUsersUseCase = tsyringe_1.container.resolve(list_accounts_usecase_1.ListAccountsUseCase);
    const controller = new list_accounts_controller_1.ListAccountsController(listUsersUseCase);
    return controller;
};
exports.makeListAccountController = makeListAccountController;
const makeCreateAcccountController = () => {
    const listAccountsUseCase = tsyringe_1.container.resolve(create_account_usecase_1.CreateAccountUseCase);
    const controller = new create_account_controller_1.CreateAccountController(listAccountsUseCase);
    return controller;
};
exports.makeCreateAcccountController = makeCreateAcccountController;
const makeUpdateAccountController = () => {
    const updateUseCase = tsyringe_1.container.resolve(update_account_usecase_1.UpdateAccountUseCase);
    const controller = new update_acccount_controller_1.UpdateAccountController(updateUseCase);
    return controller;
};
exports.makeUpdateAccountController = makeUpdateAccountController;
const makeGetAccountController = () => {
    const getAccountUseCase = tsyringe_1.container.resolve(get_user_usecase_1.GetAccountUseCase);
    const controller = new get_account_controller_1.GetAccountController(getAccountUseCase);
    return controller;
};
exports.makeGetAccountController = makeGetAccountController;
const makeDeleteAccountController = () => {
    const deleteAccountUseCase = tsyringe_1.container.resolve(delete_account_usecase_1.DeleteAccountUseCase);
    const controller = new delete_account_controller_1.DeleteAccountController(deleteAccountUseCase);
    return controller;
};
exports.makeDeleteAccountController = makeDeleteAccountController;
//# sourceMappingURL=accounts.factory.js.map