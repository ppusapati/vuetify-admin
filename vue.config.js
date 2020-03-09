'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = 'Vuetify admin'; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 8088 npm run dev OR npm run dev --port = 8088
const port = process.env.port || process.env.npm_config_port || 8688; // dev port

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
