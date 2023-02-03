import { inject } from 'tsyringe';
import { httpStatus } from '@src/shared/util/http-status-code';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { DeleteAccount } from '../use-cases/interfaces/delete-account.interface';

export class DeleteAccountController implements BaseController {
  constructor(
    @inject('DeleteAccount')
    private readonly deleteAccountUseCase: DeleteAccount
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { params } = request;
    const { id } = params;
    const response = await this.deleteAccountUseCase.execute(Number(id));

    if (response.isLeft()) {
      return badRequest(response.value);
    }
    return success(response.value, httpStatus.NO_CONTENT);
  }
}
