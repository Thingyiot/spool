'use strict';

module.exports = {
  env: 'production',
  useErrorHandler: true,
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://appContracts:!34*93TUrner!@ds027719.mongolab.com:27719/contracts'
  },
  solr: {
    host: 'titlesSolr',
    port: 80,
    path: '/'
  }
};