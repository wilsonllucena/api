import { Either } from "@src/shared/exception/either";
import { Tenant } from "../entities/tenant";

type TenantId = {
  id: number;
};


type TenantData = {
  tenant: Tenant;
};

type Tenants = {
  tenants: Tenant[];
};

type TenantBaseResponse = TenantId | Tenants | TenantData | null;

type TenantResponse = Either<Error, TenantBaseResponse>;

export { TenantResponse };
