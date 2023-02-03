import 'reflect-metadata';
import { BaseController } from '@src/shared/protocols';
import { ListAccountsController } from '../controllers/list-accounts.controller';
import { container } from 'tsyringe';
import { CreateAccountUseCase } from '../use-cases/create-account.usecase';
import { CreateAccountController } from '../controllers/create-account.controller';
import { UpdateAccountUseCase } from '../use-cases/update-account.usecase';
import { UpdateAccountController } from '../controllers/update-acccount.controller';
import { GetAccountController } from '../controllers/get-account.controller';
import { DeleteAccountController } from '../controllers/delete-account.controller';
import { GetAccountUseCase } from '../use-cases/get-user.usecase';
import { DeleteAccountUseCase } from '../use-cases/delete-account.usecase';
import { ListAccountsUseCase } from '../use-cases/list-accounts.usecase';

export const makeListAccountController = (): BaseController => {
  const listUsersUseCase = container.resolve(ListAccountsUseCase);
  const controller = new ListAccountsController(listUsersUseCase);
  return controller;
};

export const makeCreateAcccountController = (): BaseController => {
  const listAccountsUseCase = container.resolve(CreateAccountUseCase);
  const controller = new CreateAccountController(listAccountsUseCase);
  return controller;
};

export const makeUpdateAccountController = (): BaseController => {
  const updateUseCase = container.resolve(UpdateAccountUseCase);
  const controller = new UpdateAccountController(updateUseCase);
  return controller;
};

export const makeGetAccountController = (): BaseController => {
  const getAccountUseCase = container.resolve(GetAccountUseCase);
  const controller = new GetAccountController(getAccountUseCase);
  return controller;
};

export const makeDeleteAccountController = (): BaseController => {
  const deleteAccountUseCase = container.resolve(DeleteAccountUseCase);
  const controller = new DeleteAccountController(deleteAccountUseCase);
  return controller;
};