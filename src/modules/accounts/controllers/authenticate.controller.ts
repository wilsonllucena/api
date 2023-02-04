import { badRequest, success } from '@src/shared/helpers';
import logger from '@src/shared/logger';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '@src/shared/protocols';
import { inject } from 'tsyringe';
import { Authenticate } from '../use-cases/interfaces/authenticate.interface';

export class AuthController implements BaseController {
  constructor(
    @inject('Authenticate')
    private readonly authenticateUserService: Authenticate
  ) {}

  public async handle(request: HttpRequest): Promise<HttpResponse> {
    logger.info('AuthController.handle: initiating authentication');

    const { email, password } = request.body;

    const response = await this.authenticateUserService.execute({
      email,
      password,
    });

    if (response.isLeft()) {
      return badRequest(response.value);
    }

    const { user, token } = response.value;
    logger.info('AuthController.handle: finished');
    return success({ user: user, token });
  }
}
