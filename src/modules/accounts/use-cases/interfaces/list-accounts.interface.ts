import { AccountDTO, UserDTO } from "../../dtos/accounts.dto";

export interface ListAccounts {
    execute(): Promise<AccountDTO[]>;
}