import 'reflect-metadata';
import { accountMock } from '@test/unit/mocks/account.mock';
import accountRepositoryMock from '../mocks/account-repository.mock';
import { ListAccountsUseCase } from '@src/modules/accounts/use-cases/list-accounts.usecase';

describe('ListAccountsUseCase', () => {
  let accountRepository = accountRepositoryMock;

  const sut = new ListAccountsUseCase(accountRepository);

  describe('ListUsers', () => {
    test('should return a list of users', async () => {
      jest.spyOn(accountRepository, 'list').mockResolvedValue([accountMock]);
      const result = await sut.execute();
      expect(result).toEqual([accountMock]);
    });
  });
});
