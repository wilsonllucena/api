import { Router } from 'express';
import { adapterRoute } from '../../../shared/adapters/express-adapter';
import { makeAuthenticateController } from '../factory/auth.factory';


export default (router: Router): void => {
  router.post('/auth', adapterRoute(makeAuthenticateController()));
};
