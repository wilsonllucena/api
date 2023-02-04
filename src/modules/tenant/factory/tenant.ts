import { BaseController } from "@src/shared/protocols";
import { container } from "tsyringe";
import { CreateTenantController } from "../controllers/create-tenant.controller";
import { CreateTenantUseCase } from "../use-cases/create-tenant.usecase";

export const makeCreateTenantController = (): BaseController => {
  const usecase  = container.resolve(CreateTenantUseCase);
  const controller = new CreateTenantController(usecase);
  return controller;
};
