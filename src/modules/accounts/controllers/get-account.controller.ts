import { inject } from 'tsyringe';
import { httpStatus } from '@src/shared/util/http-status-code';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { GetAccount } from '../use-cases/interfaces/get-account.interface';
import logger from '@src/shared/logger';

export class GetAccountController implements BaseController {
  constructor(
    @inject('GetAccount') private readonly getAccountUseCase: GetAccount
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    logger.info('GetAccountController.handle: initiating');
    const { params } = request;
    const { id } = params;
    const response = await this.getAccountUseCase.execute(Number(id));

    if (response.isLeft()) {
      return badRequest(response.value);
    }
    logger.info('GetAccountController.handle: finished');
    return success(response.value, httpStatus.OK);
  }
}
