import { left, right } from '@src/shared/exception/either';
import { AppError } from '@src/shared/util/app-error';
import { httpStatus } from '@src/shared/util/http-status-code';
import { inject, injectable } from 'tsyringe';
import { AccountRepository,  } from '../repositories/account-repository.interface';
import { AccountResponse } from './interfaces/account-either.interface';
import { GetAccount } from './interfaces/get-account.interface';

@injectable()
export class GetAccountUseCase implements GetAccount {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: AccountRepository
  ) {}
  async execute(id: number): Promise<AccountResponse> {
    const result = await this.accountRepository.findById(id);

    if (!result) {
      return left(
        new AppError('Usuário não foi encontrado', httpStatus.NOT_FOUND)
      );
    }

    return right({
      account: result,
    });
  }
}
