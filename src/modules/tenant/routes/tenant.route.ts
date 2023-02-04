import { Router } from 'express';
import { adapterRoute } from '../../../shared/adapters/express-adapter';
import { makeCreateTenantController } from '../factory/tenant';


export default (router: Router): void => {
  router.post('/tenant/:accountId', adapterRoute(makeCreateTenantController()));
};
