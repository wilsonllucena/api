import { CreateAccount } from "@src/modules/accounts/use-cases/interfaces/create-account.interface";

const CreateAccountUseCaseMock: CreateAccount = {
  execute: jest.fn(),
};

export default CreateAccountUseCaseMock;
