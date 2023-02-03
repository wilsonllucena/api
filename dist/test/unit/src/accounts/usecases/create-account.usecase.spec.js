"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_error_1 = require("@src/shared/util/app-error");
const create_account_usecase_1 = require("@src/modules/accounts/use-cases/create-account.usecase");
const account_mock_1 = require("@test/unit/mocks/account.mock");
const sinon_1 = __importDefault(require("sinon"));
describe('CreateAccountUseCase', () => {
    const accountRepositoryMock = {
        create: jest.fn().mockResolvedValue(account_mock_1.accountMock),
        list: jest.fn(),
        findById: jest.fn(),
        findByEmail: jest.fn().mockResolvedValue(account_mock_1.accountMock),
        findByDocument: jest.fn().mockResolvedValue(account_mock_1.accountMock),
        update: jest.fn(),
        delete: jest.fn(),
    };
    let sandbox = sinon_1.default.createSandbox();
    const sut = new create_account_usecase_1.CreateAccountUseCase(accountRepositoryMock);
    beforeEach(function () {
        sandbox = sinon_1.default.createSandbox();
    });
    afterEach(function () {
        sandbox.restore();
    });
    describe('execute', () => {
        test('returns an error if the user already exists', async () => {
            const result = await sut.execute(account_mock_1.createAccountDto);
            expect(result.isLeft).toBeTruthy();
            expect(result.value).toEqual(new app_error_1.AppError('Documento já cadastrado', 409));
        });
        test('returns an error if the email already exists', async () => {
            sandbox.stub(accountRepositoryMock, 'findByDocument').resolves(null);
            const result = await sut.execute({
                name: 'name_user',
                email: 'teste@email.com',
                password: 'password',
                document: '123456789',
                role: 'ADMIN',
            });
            expect(result.isLeft).toBeTruthy();
            expect(result.value).toEqual(new app_error_1.AppError('Email já cadastrado', 409));
        });
        test('should create a new user', async () => {
            const user = {
                name: 'name_user',
                email: 'teste@email.com',
                password: 'password',
            };
            sandbox.stub(accountRepositoryMock, 'findByEmail').resolves(null);
            const result = await sut.execute(user);
            expect(result.isRight).toBeTruthy();
            expect(result.value).toEqual({ id: account_mock_1.accountMock.id });
        });
    });
});
//# sourceMappingURL=create-account.usecase.spec.js.map