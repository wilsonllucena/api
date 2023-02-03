import { HttpRequest, HttpResponse } from './http';

export interface BaseController {
   handle(httpRequest?: HttpRequest): Promise<HttpResponse>;
}
