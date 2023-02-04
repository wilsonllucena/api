import config from 'config';
import logger from './shared/logger';
(async (): Promise<void> => {
  const app = (await import('./config/app')).default;
  app.listen(config.get('App.port'), () =>
    logger.info('Server listening on port:  ' + config.get('App.port'))
  );
})();
