import { inject, injectable } from "tsyringe";
import { AccountDTO, UserDTO } from "../dtos/accounts.dto";
import { AccountRepository } from "../repositories/account-repository.interface";
import { ListAccounts } from "./interfaces/list-accounts.interface";

@injectable()
export class ListAccountsUseCase implements ListAccounts {
  constructor(
    @inject('AccountRepository')
    private readonly accountRepository: AccountRepository
  ) {}
  async execute(): Promise<any[]> {
    const users = await this.accountRepository.list();
    return users;
  }
}