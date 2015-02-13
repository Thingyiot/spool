'use strict';

module.exports = {
  env: 'preview',
  mongo: {
  	uri: 'mongodb://appContracts:!2014*TuRner!@ds033489.mongolab.com:33489/contracts-preview'
  },
  redis: {
  	server: 'utilp1ea7.turner.com',
  	secretKey: 'SeekQret-ScarModPreview',
  	prefix: 'sess-preview',
  	port: 6383,
  	db: 1
  },
  logging: {
    name: 'contracts-preview',
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
