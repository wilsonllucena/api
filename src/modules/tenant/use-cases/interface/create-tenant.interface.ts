import { Either } from "@src/shared/exception/either";
import { CreateTenantDto } from "../../dtos/tenant.dto";
import { TenantResponse } from "../../either/tenant.either";

export interface CreateTenant {
    execute(data: CreateTenantDto, accountId: number): Promise<TenantResponse>;
}