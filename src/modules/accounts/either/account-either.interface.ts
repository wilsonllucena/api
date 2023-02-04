import { Either } from '@src/shared/exception/either';
import { AccountDTO } from '../dtos/accounts.dto';

type AccountID= {
  id: number;
};

type AccountNull = null;

type AccountData = {
    account: AccountDTO;
};

type AccountVarious = AccountID | AccountNull | AccountData;

type AccountResponse = Either<Error, AccountVarious>;

export { AccountResponse };