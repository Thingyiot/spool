'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://admin:admin@ds051947.mongolab.com:51947/thingy-device-db'
  },
  solr: {
    host: 'titlesSolrDev',
    port: 80,
    path: '/'
  },
  redis: {
    server: 'utilp1ea7.turner.com',
    secretKey: 'SeekQret-ScarModDev',
    prefix: 'sess-dev',
    port: 6383,
    db: 0
  },
  logging: {
    name: 'thingy-dev',
    streams: [
      {
         type: 'raw',
         stream: require('../../logger-prettystream'),
         level: 'info'
      }
    ]
  }
};


