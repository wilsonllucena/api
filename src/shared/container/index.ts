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
import { TenantRepository } from '@src/modules/tenant/repositories/tenant.interface.repository';
import { TenantPrismaRepository } from '@src/modules/tenant/repositories/tenant.prisma.repository';
import { CreateTenant } from '@src/modules/tenant/use-cases/interface/create-tenant.interface';
import { CreateTenantUseCase } from '@src/modules/tenant/use-cases/create-tenant.usecase';
import { ListTenants } from '@src/modules/tenant/use-cases/interface/list-tenant.interface';
import { ListTenantUseCase } from '@src/modules/tenant/use-cases/list-tenant.usecase';

// Prisma
container.registerSingleton<PrismaClient>('PrismaClient', PrismaClient);

// Repository
container.registerSingleton<AccountRepository>(
  'AccountRepository',
  AccountPrismaRepository
);

container.registerSingleton<TenantRepository>(
  'TenantRepository',
  TenantPrismaRepository
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

// Tenant
 container.registerSingleton<CreateTenant>('CreateTenant', CreateTenantUseCase);  
 container.registerSingleton<ListTenants>('ListTenants', ListTenantUseCase);  

// Authentication
container.registerSingleton<Authenticate>('Authenticate', AuthenticateUseCase);
// HashProvider
container.registerSingleton<HashProvider>('HashProvider', BCryptHashProvider);
