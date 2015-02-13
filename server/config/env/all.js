'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  clientDir: 'client',
  useErrorHandler: false,
  port: process.env.PORT || 3000 ,
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },
  solr: {
    host: 'titlesSolr',
    port: 80,
    path: '/'
  },
  flowUrl: 'flow.tbs.io',
  logging: {
    name: 'contracts',
    streams: [
      {
         type: 'raw',
         stream: require('../../logger-prettystream'),
         level: 'info'
      }
    ]
  }
};
