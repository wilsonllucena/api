import { BaseController } from "@src/shared/protocols";
import { container } from "tsyringe";
import { CreateTenantController } from "../controllers/create-tenant.controller";
import { ListTenantController } from "../controllers/list-tenant.controlle";
import { CreateTenantUseCase } from "../use-cases/create-tenant.usecase";
import { ListTenantUseCase } from "../use-cases/list-tenant.usecase";

export const makeListTenantController = (): BaseController => {
  const usecase = container.resolve(ListTenantUseCase);
  const controller = new ListTenantController(usecase);
  return controller;
};


export const makeCreateTenantController = (): BaseController => {
  const usecase  = container.resolve(CreateTenantUseCase);
  const controller = new CreateTenantController(usecase);
  return controller;
};
