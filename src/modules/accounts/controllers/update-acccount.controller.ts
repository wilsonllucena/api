import { httpStatus } from '@src/shared/util/http-status-code';
import { inject } from 'tsyringe';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { UpdateAccount } from '../use-cases/interfaces/update-account.interface';

export class UpdateAccountController implements BaseController {
  constructor(
    @inject('UpdateAccount')
    private readonly updateAccountUseCase: UpdateAccount
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { params, body } = request;
    const { id } = params;
    const response = await this.updateAccountUseCase.execute(Number(id), body);
    if (response.isLeft()) {
      return badRequest(response.value);
    }
    return success(response.value, httpStatus.OK);
  }
}
