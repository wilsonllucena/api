import { left, right } from '@src/shared/exception/either';
import { AppError } from '@src/shared/util/app-error';
import { httpStatus } from '@src/shared/util/http-status-code';
import { inject, injectable } from 'tsyringe';
import { UpdateAccountDTO } from '../dtos/accounts.dto';
import HashProvider from '../providers/hashprovider.interface';
import { AccountRepository } from '../repositories/account-repository.interface';
import { AccountResponse } from '../either/account-either.interface';
import { UpdateAccount } from './interfaces/update-account.interface';

@injectable()
export class UpdateAccountUseCase implements UpdateAccount {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: AccountRepository,
    @inject('HashProvider')
    private readonly hashProvider: HashProvider
  ) {}
  async execute(
    id: number,
    account: UpdateAccountDTO
  ): Promise<AccountResponse> {
    const result = await this.accountRepository.findById(id);
    const emailExist =
      account?.email &&
      (await this.accountRepository.findByEmail(account.email));

    const documentExist =
      account?.document &&
      (await this.accountRepository.findByDocument(account.document));

    if (!result) {
      return left(
        new AppError('Usuário não foi encontrado', httpStatus.NOT_FOUND)
      );
    }

    if (documentExist && documentExist.id !== id) {
      return left(
        new AppError('Documento já está em uso', httpStatus.CONFLICT)
      );
    }

    if (emailExist && emailExist.id !== id) {
      return left(new AppError('Email já está em uso', httpStatus.CONFLICT));
    }

    let hashedPassword: any;
    if (account.password) {
      hashedPassword = await this.hashProvider.generateHash(account.password);
    }

    const updatedAccount = await this.accountRepository.update(id, {
      ...account,
      password: hashedPassword ?? result.password,
    });

    return right({
      id: updatedAccount.id,
    });
  }
}
