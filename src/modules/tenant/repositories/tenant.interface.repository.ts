import { CreateTenantDto, UpdateTenantDto } from "../dtos/tenant.dto";
import { Tenant } from "../entities/tenant";

export interface TenantRepository {
    create(data: CreateTenantDto, accountId: number): Promise<Tenant>;
    update(id: number, data: UpdateTenantDto): Promise<Tenant>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Tenant | unknown>;
    findBySlug(slug: string): Promise<Tenant | unknown>;
    findAll(): Promise<Tenant[]>;
    findBySchema(schema: string): Promise<Tenant | unknown>;
    findByAccountId(accountId: number): Promise<Tenant | unknown>;
}