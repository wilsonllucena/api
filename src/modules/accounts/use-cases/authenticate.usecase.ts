import { sign } from 'jsonwebtoken';
import authConfig from '@src/config/auth';

import { injectable, inject } from 'tsyringe';
import { AppError } from '@src/shared/util/app-error';
import { AccountRepository } from '../repositories/account-repository.interface';
import HashProvider from '../providers/hashprovider.interface';
import {
  Authenticate,
  AuthResponse,
} from './interfaces/authenticate.interface';
import { left, right } from '@src/shared/exception/either';

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUseCase implements Authenticate {
  constructor(
    @inject('AccountRepository')
    private accountRepository: AccountRepository,

    @inject('HashProvider')
    private hashProvider: HashProvider
  ) {}

  public async execute({ email, password }: IRequest): Promise<AuthResponse> {
    const user = await this.accountRepository.findByEmail(email);

    if (!user) {
      return left(new AppError('Incorret email/password combination', 401));
    }
    const passwordMatched =
      user?.password &&
      (await this.hashProvider.compareHash(password, user?.password));

    if (!passwordMatched) {
      return left(new AppError('Incorret email/password combination', 401));
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn: expiresIn,
    });

    return right({
      user: { sub: user.id, name: user.name, email: user.email },
      token,
    });
  }
}

export default AuthenticateUseCase;
