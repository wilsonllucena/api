import { Express } from 'express';
import { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

export const cors = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  response.set('access-control-allow-origin', '*');
  response.set('access-control-allow-methods', '*');
  response.set('access-control-allow-headers', '*');
  next();
};

export const bodyParser = json();

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
};
