import { BaseController, HttpRequest, HttpResponse } from "@shared/protocols";
import { success } from "@src/shared/helpers";
import { inject } from "tsyringe";
import { CreateTenant } from "../use-cases/interface/create-tenant.interface";

export class CreateTenantController implements BaseController {
  constructor(
    @inject('CreateTenant')
    private readonly createTenantUseCase: CreateTenant
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { accountId } = httpRequest.params;
    const response = await this.createTenantUseCase.execute(
      httpRequest.body,
      +accountId
    );

    return success(response.value)
  }
}