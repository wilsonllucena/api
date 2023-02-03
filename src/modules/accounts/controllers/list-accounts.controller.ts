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
    const result = await this.listAccountsUseCase.execute();
    return success(result);
  }
}
