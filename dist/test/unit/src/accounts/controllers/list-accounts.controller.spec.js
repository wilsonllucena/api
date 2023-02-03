"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const list_accounts_usecase_mock_1 = __importDefault(require("../mocks/list-accounts-usecase.mock"));
const list_accounts_controller_1 = require("@src/modules/accounts/controllers/list-accounts.controller");
const account_mock_1 = require("@test/unit/mocks/account.mock");
describe('CreateAccountController', () => {
    const listUsersUseCase = list_accounts_usecase_mock_1.default;
    const sut = new list_accounts_controller_1.ListAccountsController(listUsersUseCase);
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('index', () => {
        test('should index return list data ', async () => {
            const users = [account_mock_1.accountMock];
            const listUserUseCaseSpy = jest
                .spyOn(listUsersUseCase, 'execute')
                .mockResolvedValue(users);
            const httpResponse = await sut.handle();
            const expected = users;
            expect(httpResponse.statusCode).toBe(200);
            expect(listUserUseCaseSpy).toHaveBeenCalled();
            expect(httpResponse.body).toEqual(expected);
        });
        test('should index return empty array ', async () => {
            const listUserUseCaseSpy = jest
                .spyOn(listUsersUseCase, 'execute')
                .mockResolvedValue([]);
            const httpResponse = await sut.handle();
            expect(httpResponse.statusCode).toBe(200);
            expect(listUserUseCaseSpy).toHaveBeenCalled();
            expect(httpResponse.body).toEqual([]);
        });
    });
});
//# sourceMappingURL=list-accounts.controller.spec.js.map