import { UpdateAccountDTO } from "../../dtos/accounts.dto";
import { AccountResponse } from "./account-either.interface";

type UpdateAccount = {
  execute(id: number, account: UpdateAccountDTO): Promise<AccountResponse>;
}

export { UpdateAccount };
