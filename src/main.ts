import config from 'config';
(async (): Promise<void> => {
  const app = (await import('./config/app')).default;
  app.listen(config.get('App.port'), () =>
    console.log('Server listening on port:  ' + config.get('App.port'))
  );
})();
