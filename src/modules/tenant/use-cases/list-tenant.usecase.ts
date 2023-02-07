import { left, right } from '@shared/exception/either';
import { AppError } from '@shared/util/app-error';
import { httpStatus } from '@shared/util/http-status-code';
import { inject, injectable } from 'tsyringe';
import { CreateTenantDto } from '../dtos/tenant.dto';
import { TenantResponse } from '../either/tenant.either';
import { TenantRepository } from '../repositories/tenant.interface.repository';
import { CreateTenant } from './interface/create-tenant.interface';
import { ListTenants } from './interface/list-tenant.interface';

@injectable()
export class ListTenantUseCase implements ListTenants {
  constructor(
    @inject('TenantRepository')
    private readonly tenantRepository: TenantRepository
  ) {}

  async execute(): Promise<TenantResponse> {
    const tenants = await this.tenantRepository.findAll();
    return right({
      tenants,
    });
  }
}
