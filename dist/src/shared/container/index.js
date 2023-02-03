"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const list_accounts_usecase_1 = require("@src/modules/accounts/use-cases/list-accounts.usecase");
const account_prisma_repository_1 = require("@src/modules/accounts/repositories/account.prisma.repository");
const create_account_usecase_1 = require("@src/modules/accounts/use-cases/create-account.usecase");
const update_account_usecase_1 = require("@src/modules/accounts/use-cases/update-account.usecase");
const client_1 = require("@prisma/client");
const get_user_usecase_1 = require("@src/modules/accounts/use-cases/get-user.usecase");
const delete_account_usecase_1 = require("@src/modules/accounts/use-cases/delete-account.usecase");
tsyringe_1.container.registerSingleton('PrismaClient', client_1.PrismaClient);
tsyringe_1.container.registerSingleton('AccountRepository', account_prisma_repository_1.AccountPrismaRepository);
tsyringe_1.container.registerSingleton('ListAccounts', list_accounts_usecase_1.ListAccountsUseCase);
tsyringe_1.container.registerSingleton('CreateAccount', create_account_usecase_1.CreateAccountUseCase);
tsyringe_1.container.registerSingleton('UpdateAccount', update_account_usecase_1.UpdateAccountUseCase);
tsyringe_1.container.registerSingleton('GetAccount', get_user_usecase_1.GetAccountUseCase);
tsyringe_1.container.registerSingleton('DeleteAccount', delete_account_usecase_1.DeleteAccountUseCase);
//# sourceMappingURL=index.js.map