require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: 'api.producthunt.com/v1',
  app: {
    title: 'Ph Proj',
    description: '',
    head: {
      titleTemplate: '%s | Ph Proj'
    }
  }
}, environment);
