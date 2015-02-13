'use strict';

module.exports = {
  env: 'integration',
  mongo: {
    uri: 'mongodb://utilp1ea6.turner.com:27017/contracts-integration'
  },
  solr: {
    host: 'titlesSolrDev',
    port: 80,
    path: '/'
  },
  redis: {
  	server: 'utilp1ea7.turner.com',
  	secretKey: 'SeekQret-ScarModDev',
  	prefix: 'sess-integration',
  	port: 6383,
  	db: 2
  },
  logging: {
    name: 'contracts-integration',
    streams: [
      {
         type: 'raw',
         stream: require('../../logger-prettystream'),
         level: 'info'
      },
      {
         type: "raw",
         level: "info",
         stream: require('bunyan-logstash').createStream({
           host: "utilp1ea10",
           port: 5545
         })
      }
    ]
  }
};