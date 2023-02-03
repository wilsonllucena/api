import 'reflect-metadata';
import { BaseController } from '@src/shared/protocols';
import { container } from 'tsyringe';
import AuthenticateUseCase from '../use-cases/authenticate.usecase';
import { AuthController } from '../controllers/authenticate.controller';


export const makeAuthenticateController = (): BaseController => {
  const authenticateUsersUseCase = container.resolve(AuthenticateUseCase);
  const controller = new AuthController(authenticateUsersUseCase);
  return controller;
};

