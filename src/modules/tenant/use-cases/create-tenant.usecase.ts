import { left, right } from '@shared/exception/either';
import { AppError } from '@shared/util/app-error';
import { httpStatus } from '@shared/util/http-status-code';
import { inject, injectable } from 'tsyringe';
import { CreateTenantDto } from '../dtos/tenant.dto';
import { TenantResponse } from '../either/tenant.either';
import { TenantRepository } from '../repositories/tenant.interface.repository';
import { CreateTenant } from './interface/create-tenant.interface';

@injectable()
export class CreateTenantUseCase implements CreateTenant {
  constructor(
    @inject('TenantRepository')
    private readonly tenantRepository: TenantRepository
  ) {}

  async execute(data: CreateTenantDto, accountId: number): Promise<TenantResponse> {

    const tenantExists = await this.tenantRepository.findBySlug(data.slug);
    const tenantExistsSchema = await this.tenantRepository.findBySchema(data.schema);
    const tenantExistsAccountId = await this.tenantRepository.findByAccountId(accountId);

    if (!tenantExistsAccountId) {
      return left(new AppError('Conta não existe', httpStatus.NOT_FOUND));
    }

    if (tenantExistsSchema) {
      return left(new AppError('Já existe um banco com esse nome ', httpStatus.CONFLICT));
    }

    if (tenantExists) {
      return left(new AppError('Já existe um subdominio com esse nome ', httpStatus.CONFLICT));
    }
    const tenant = await this.tenantRepository.create(data, accountId);
    if (!tenant) {
      return left(new AppError('Tenant not created', httpStatus.BAD_REQUEST));
    }

    return right({
        id: tenant.id,
    });
  }
}
