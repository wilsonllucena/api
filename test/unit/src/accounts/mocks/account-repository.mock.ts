import 'reflect-metadata';
import { AccountRepository } from '@src/modules/accounts/repositories/account-repository.interface';

const accountRepositoryMock: AccountRepository = {
  create: jest.fn(),
  list: jest.fn(),
  findById: jest.fn(),
  findByEmail: jest.fn(),
  findByDocument: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

export default accountRepositoryMock;
