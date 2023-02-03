import { httpStatus } from '@src/shared/util/http-status-code';
import { inject } from 'tsyringe';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { CreateAccount } from '../use-cases/interfaces/create-account.interface';

export class CreateAccountController implements BaseController {
  constructor(
    @inject('CreateAccount')
    private readonly createAccountUseCase: CreateAccount
  ) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const response = await this.createAccountUseCase.execute(data.body);
    if (response.isLeft()) {
      return badRequest(response.value);
    }
    return success(response.value, httpStatus.CREATED);
  }
}
