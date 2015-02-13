'use strict';

module.exports = {
  env: 'test',
  mongo: {
    uri: 'mongodb://appContracts:!2014*TuRner!@ds033629.mongolab.com:33629/contracts-test'
  },
  solr: {
    host: 'titlesSolrQA',
    port: 80,
    path: '/'
  },
  redis: {
  	server: 'utilp1ea7.turner.com',
  	secretKey: 'SeekQret-ScarModTest',
  	prefix: 'sess-test',
  	port: 6383,
  	db: 2
  },
  logging: {
    name: 'contracts-test',
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
