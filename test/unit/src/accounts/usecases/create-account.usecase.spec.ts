import 'reflect-metadata';
import { AppError } from '@src/shared/util/app-error';
import { CreateAccountUseCase } from '@src/modules/accounts/use-cases/create-account.usecase';
import { accountMock, createAccountDto } from '@test/unit/mocks/account.mock';
import sinon from 'sinon';
import { AccountRepository } from '@src/modules/accounts/repositories/account-repository.interface';

describe('CreateAccountUseCase', () => {
  const accountRepositoryMock: AccountRepository = {
    create: jest.fn().mockResolvedValue(accountMock),
    list: jest.fn(),
    findById: jest.fn(),
    findByEmail: jest.fn().mockResolvedValue(accountMock),
    findByDocument: jest.fn().mockResolvedValue(accountMock),
    update: jest.fn(),
    delete: jest.fn(),
  };
  let sandbox = sinon.createSandbox();

  const sut = new CreateAccountUseCase(accountRepositoryMock);
  beforeEach(function () {
    sandbox = sinon.createSandbox();
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('execute', () => {
    test('returns an error if the user already exists', async () => {
  
      const result = await sut.execute(createAccountDto);

      expect(result.isLeft).toBeTruthy();
      expect(result.value).toEqual(
        new AppError('Documento já cadastrado', 409)
      );
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
      expect(result.value).toEqual(new AppError('Email já cadastrado', 409));
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
      expect(result.value).toEqual({ id: accountMock.id });
    });
  });
});
