'use strict';

const casbin = require('casbin');
//import { casbin } from 'casbin';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545815632038_6669';

  // add your config here
  config.middleware = ['user', 'authz'];

  config.authz = {
    enable: true,
    newEnforcer: async () => {
      const enforcer = await casbin.newEnforcer('authz_model.conf', 'authz_policy.csv');
      return enforcer;
    },
  };

  return config;
};
