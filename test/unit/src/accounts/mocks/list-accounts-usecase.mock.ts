import { ListAccounts } from "@src/modules/accounts/use-cases/interfaces/list-accounts.interface";

const ListAccountsUseCaseMock: ListAccounts = {
  execute: jest.fn(),
};

export default ListAccountsUseCaseMock;
