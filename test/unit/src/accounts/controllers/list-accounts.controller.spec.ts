import 'reflect-metadata';
import ListUsersUseCaseMock from '../mocks/list-accounts-usecase.mock';
import { ListAccountsController } from '@src/modules/accounts/controllers/list-accounts.controller';
import { accountMock } from '@test/unit/mocks/account.mock';

describe('CreateAccountController', () => {
 

  const listUsersUseCase = ListUsersUseCaseMock;
  const sut = new ListAccountsController(listUsersUseCase);
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('index', () => {
    test('should index return list data ', async () => {
      const users = [accountMock];
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
