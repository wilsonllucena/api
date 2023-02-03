"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const account_mock_1 = require("@test/unit/mocks/account.mock");
const account_repository_mock_1 = __importDefault(require("../mocks/account-repository.mock"));
const list_accounts_usecase_1 = require("@src/modules/accounts/use-cases/list-accounts.usecase");
describe('ListAccountsUseCase', () => {
    let accountRepository = account_repository_mock_1.default;
    const sut = new list_accounts_usecase_1.ListAccountsUseCase(accountRepository);
    describe('ListUsers', () => {
        test('should return a list of users', async () => {
            jest.spyOn(accountRepository, 'list').mockResolvedValue([account_mock_1.accountMock]);
            const result = await sut.execute();
            expect(result).toEqual([account_mock_1.accountMock]);
        });
    });
});
//# sourceMappingURL=list-accounts.usecase.spec.js.map