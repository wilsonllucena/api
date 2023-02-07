import { TenantResponse } from "../../either/tenant.either";
import { Tenant } from "../../entities/tenant";

export interface ListTenants {
    execute(): Promise<TenantResponse>;
}