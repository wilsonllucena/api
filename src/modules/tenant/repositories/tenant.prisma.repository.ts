import PrismaService from '@src/shared/database/prismaClient';
import { CreateTenantDto, UpdateTenantDto } from '../dtos/tenant.dto';
import { Tenant } from '../entities/tenant';
import { TenantRepository } from './tenant.interface.repository';

export class TenantPrismaRepository implements TenantRepository {
  private prisma = PrismaService;

  async create(data: CreateTenantDto, accountId: number): Promise<Tenant> {
    const tenant = await this.prisma.tenant.create({
      data: {
        name: data.name,
        schema: data.schema,
        slug: data.slug,
        status: data.status,
        userTenant: {
          create: {
            accountId: accountId,
          },
        },
      },
    });
    return tenant;
  }

  async update(id: number, data: UpdateTenantDto): Promise<Tenant> {
    const tenant = await this.prisma.tenant.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        schema: data.schema,
        slug: data.slug,
        status: data.status,
      },
    });
    return tenant;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.tenant.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: number): Promise<Tenant | unknown> {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        id,
      },
    });
    return tenant;
  }

  async findBySlug(slug: string): Promise<Tenant | unknown> {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        slug,
      },
    });
    return tenant;
  }

  async findBySchema(schema: string): Promise<Tenant | unknown> {
    const tenant = await this.prisma.tenant.findUnique({
      where: {
        schema,
      },
    });

    return tenant;
  }

  async findByAccountId(accountId: number): Promise<Tenant | unknown> {
    const tenant = await this.prisma.tenant.findFirst({
      where: {
       userTenant:
        {
          some: {
            accountId: accountId
          }
        }
      },
    });
    return tenant;
  }

  async findAll(): Promise<Tenant[]> {
    const tenants = await this.prisma.tenant.findMany();
    return tenants;
  }
}
