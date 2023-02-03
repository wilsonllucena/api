import { AccountDTO, CreateAccountDTO, UpdateAccountDTO, UserDTO } from "../dtos/accounts.dto";

export interface AccountRepository {
  create(account: CreateAccountDTO): Promise<AccountDTO>;
  findByEmail(email: string): Promise<any>;
  findByDocument(document: string): Promise<AccountDTO | null>;
  findById(id: number): Promise<AccountDTO | null>;
  delete(id: number): Promise<AccountDTO | null>;
  list(): Promise<AccountDTO[]>;
  update(id: number, data: UpdateAccountDTO): Promise<AccountDTO>;
}