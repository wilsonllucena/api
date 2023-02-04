import {CreateAccountDTO} from "../../dtos/accounts.dto";
import { AccountResponse } from "../../either/account-either.interface";

type CreateAccount = {
  execute(account: CreateAccountDTO): Promise<AccountResponse>;
}

export { CreateAccount };
