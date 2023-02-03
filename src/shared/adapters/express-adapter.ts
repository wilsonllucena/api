import { Request, Response } from 'express';
import { BaseController, HttpRequest, HttpResponse } from '../protocols';


export const adapterRoute = (controller: BaseController): any => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      query: req.query,
      params: req.params,
      body: req.body,
    };
    const httpResponse: HttpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
