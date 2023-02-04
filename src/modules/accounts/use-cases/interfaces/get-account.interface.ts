import { AccountResponse } from '../../either/account-either.interface';

type GetAccount = {
  execute(id: number): Promise<AccountResponse>;
};

export { GetAccount };
