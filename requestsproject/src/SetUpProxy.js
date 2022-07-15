const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/rest',
    createProxyMiddleware({
      target: 'https://ac.dev.dish.co',
      changeOrigin: true,
    })
  );
  app.use(
    '/oauth',
    createProxyMiddleware({
      target: 'https://ac.dev.dish.co',
      changeOrigin: true,
    })
  );
};