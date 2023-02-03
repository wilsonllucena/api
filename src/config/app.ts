import 'reflect-metadata';
import '@shared/container';

import express from 'express';
import setupRoutes from '../routes';
import setupMiddlewares from './middleware';
const app = express();
setupMiddlewares(app);
setupRoutes(app);
export default app;
