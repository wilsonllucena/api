import { AccountResponse } from '../../either/account-either.interface';

type DeleteAccount = {
  execute(id: number): Promise<AccountResponse>;
};

export { DeleteAccount };
