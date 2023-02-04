import logger from '@src/shared/logger';
import { inject } from 'tsyringe';
import { success } from '../../../shared/helpers';
import {
  BaseController,
  HttpResponse,
} from '../../../shared/protocols';
import { ListAccounts } from '../use-cases/interfaces/list-accounts.interface';

export class ListAccountsController implements BaseController {
  constructor(
    @inject('ListAccounts') private readonly listAccountsUseCase: ListAccounts
  ) {}

  async handle(): Promise<HttpResponse> {
    logger.info('ListAccountsController.handle: initiating');
    const result = await this.listAccountsUseCase.execute();
    logger.info('ListAccountsController.handle: finished');
    return success(result);
  }
}
