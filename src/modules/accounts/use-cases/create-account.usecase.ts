import { left, right } from '@src/shared/exception/either';
import { AppError } from '@src/shared/util/app-error';
import { httpStatus } from '@src/shared/util/http-status-code';
import { inject, injectable } from 'tsyringe';
import { CreateAccountDTO } from '../dtos/accounts.dto';
import HashProvider from '../providers/hashprovider.interface';
import { AccountRepository } from '../repositories/account-repository.interface';
import { AccountResponse } from '../either/account-either.interface';
import { CreateAccount } from './interfaces/create-account.interface';

@injectable()
export class CreateAccountUseCase implements CreateAccount {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: AccountRepository,
    @inject('HashProvider')
    private readonly hashProvider: HashProvider
  ) {}
  async execute(user: CreateAccountDTO): Promise<AccountResponse> {
    const userExists = await this.accountRepository.findByEmail(user.email);

    const documentExists =
      user?.document &&
      (await this.accountRepository.findByDocument(user?.document));

    if (documentExists) {
      return left(new AppError('Documento já cadastrado', httpStatus.CONFLICT));
    }

    if (userExists) {
      return left(new AppError('Email já cadastrado', httpStatus.CONFLICT));
    }

    const hashedPassword =
      user.password && (await this.hashProvider.generateHash(user.password));

    const result = await this.accountRepository.create({
      ...user, 
      password: hashedPassword,
    });

    return right({
      id: result.id,
    });
  }
}
