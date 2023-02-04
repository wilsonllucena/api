import { inject } from 'tsyringe';
import { httpStatus } from '@src/shared/util/http-status-code';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { DeleteAccount } from '../use-cases/interfaces/delete-account.interface';
import logger from '@src/shared/logger';

export class DeleteAccountController implements BaseController {
  constructor(
    @inject('DeleteAccount')
    private readonly deleteAccountUseCase: DeleteAccount
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    logger.info('DeleteAccountController.handle: initiating');
    const { params } = request;
    const { id } = params;
    const response = await this.deleteAccountUseCase.execute(Number(id));

    if (response.isLeft()) {
      return badRequest(response.value);
    }
    logger.info('DeleteAccountController.handle: finished');
    return success(response.value, httpStatus.NO_CONTENT);
  }
}
