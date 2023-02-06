import { ensureAuthenticated } from '@src/shared/middlewares/ensure-authenticated';
import { Router } from 'express';
import { adapterRoute } from '../../../shared/adapters/express-adapter';
import {
  makeCreateAcccountController,
  makeDeleteAccountController,
  makeGetAccountController,
  makeListAccountController,
  makeUpdateAccountController,
} from '../factory/accounts.factory';

export default (router: Router): void => {
  router.get('/accounts', ensureAuthenticated, adapterRoute(makeListAccountController()));
  router.get('/account/:id',ensureAuthenticated, adapterRoute(makeGetAccountController()));
  router.post('/account', adapterRoute(makeCreateAcccountController()));
  router.patch('/account/:id',ensureAuthenticated, adapterRoute(makeUpdateAccountController()));
  router.delete(
    '/account/:id',
    ensureAuthenticated,adapterRoute(makeDeleteAccountController())
  );
};
