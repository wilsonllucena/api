export type Status = 'ACTIVE' | 'INACTIVE';
export interface TenantDto {
    name?: string;
    schema: string;
    slug: string;
    status: Status;
}

export interface TenantModel {
  name?: string;
  schema: string;
  slug: string;
  status: Status;
}

export type CreateTenantDto = TenantDto;
export type UpdateTenantDto = Partial<TenantDto>;