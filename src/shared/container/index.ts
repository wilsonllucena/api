import 'reflect-metadata';
import { container } from 'tsyringe';
import { ListAccountsUseCase } from '@src/modules/accounts/use-cases/list-accounts.usecase';
import { ListAccounts } from '@src/modules/accounts/use-cases/interfaces/list-accounts.interface';
import { AccountPrismaRepository } from '@src/modules/accounts/repositories/account.prisma.repository';
import { AccountRepository } from '@src/modules/accounts/repositories/account-repository.interface';
import { CreateAccount } from '@src/modules/accounts/use-cases/interfaces/create-account.interface';
import { CreateAccountUseCase } from '@src/modules/accounts/use-cases/create-account.usecase';
import { UpdateAccount } from '@src/modules/accounts/use-cases/interfaces/update-account.interface';
import { UpdateAccountUseCase } from '@src/modules/accounts/use-cases/update-account.usecase';
import { PrismaClient } from '@prisma/client';
import { GetAccount } from '@src/modules/accounts/use-cases/interfaces/get-account.interface';
import { GetAccountUseCase } from '@src/modules/accounts/use-cases/get-user.usecase';
import { DeleteAccount } from '@src/modules/accounts/use-cases/interfaces/delete-account.interface';
import { DeleteAccountUseCase } from '@src/modules/accounts/use-cases/delete-account.usecase';
import HashProvider from '@src/modules/accounts/providers/hashprovider.interface';
import BCryptHashProvider from '@src/modules/accounts/providers/bcrypt-hash-provider';
import { Authenticate } from '@src/modules/accounts/use-cases/interfaces/authenticate.interface';
import AuthenticateUseCase from '@src/modules/accounts/use-cases/authenticate.usecase';

// Prisma
container.registerSingleton<PrismaClient>('PrismaClient', PrismaClient);

// Repository
container.registerSingleton<AccountRepository>(
  'AccountRepository',
  AccountPrismaRepository
);

// UseCase
container.registerSingleton<ListAccounts>('ListAccounts', ListAccountsUseCase);
container.registerSingleton<CreateAccount>(
  'CreateAccount',
  CreateAccountUseCase
);
container.registerSingleton<UpdateAccount>(
  'UpdateAccount',
  UpdateAccountUseCase
);
container.registerSingleton<GetAccount>('GetAccount', GetAccountUseCase);
container.registerSingleton<DeleteAccount>(
  'DeleteAccount',
  DeleteAccountUseCase
);

// Authentication
container.registerSingleton<Authenticate>('Authenticate', AuthenticateUseCase);
// HashProvider
container.registerSingleton<HashProvider>('HashProvider', BCryptHashProvider);
