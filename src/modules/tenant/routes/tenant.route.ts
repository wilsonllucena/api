import { Router } from 'express';
import { adapterRoute } from '../../../shared/adapters/express-adapter';
import { makeCreateTenantController, makeListTenantController } from '../factory/tenant';


export default (router: Router): void => {
  router.get('/tenants', adapterRoute(makeListTenantController()));
  router.post('/tenant/:accountId', adapterRoute(makeCreateTenantController()));
};
