import  { AccountDTO, CreateAccountDTO } from "@src/modules/accounts/dtos/accounts.dto";

export const accountMock = {
  id: 1,
  name: 'name_user',
  email: 'email@email.com',
  password: 'password',
  document: '123456789',
  role: 'ADMIN',
  createdAt: new Date(),
  updatedAt: new Date(),
} as AccountDTO;

export const createAccountDto = {
  name: 'name_user',
  email: 'email@email.com',
  password: 'password',
  document: '12345689',
  role: 'ADMIN',
} as CreateAccountDTO;