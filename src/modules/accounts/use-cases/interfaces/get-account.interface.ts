import { AccountResponse } from './account-either.interface';

type GetAccount = {
  execute(id: number): Promise<AccountResponse>;
};

export { GetAccount };
