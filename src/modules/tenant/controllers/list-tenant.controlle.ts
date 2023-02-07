import { BaseController, HttpRequest, HttpResponse } from "@shared/protocols";
import { success } from "@src/shared/helpers";
import { inject } from "tsyringe";
import { ListTenants } from "../use-cases/interface/list-tenant.interface";

export class ListTenantController implements BaseController {
  constructor(
    @inject('ListTenants')
    private readonly listTenantUseCase: ListTenants
  ) {}
  async handle(): Promise<HttpResponse> {
    const response = await this.listTenantUseCase.execute();

    return success(response.value);
  }
}