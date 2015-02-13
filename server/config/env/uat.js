'use strict';

module.exports = {
  env: 'uat',
  mongo: {
  	uri: 'mongodb://appContracts:!2014*TuRner!@ds033059.mongolab.com:33059/contracts-uat'
  },
  redis: {
  	server: 'utilp1ea7.turner.com',
  	secretKey: 'SeekQret-ScarModUat',
  	prefix: 'sess-uat',
  	port: 6383,
  	db: 3
  },
  logging: {
    name: 'contracts-uat',
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
