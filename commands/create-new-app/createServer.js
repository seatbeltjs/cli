const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const _ = require('lodash');

module.exports = function(appPath, server) {
  console.log('creating server');
  mkdirp(path.join(appPath, 'config'));
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'server.ts.template'), {'encoding': 'utf8'});
  const template = _.template(fileData);
  let serverPackageName;
  let serverDecoratorName;
  switch (server) {
    case 'Restify':
      serverPackageName = '@seatbelt/server-restify';
      serverDecoratorName = 'DRestify';
      break;
    case 'Express':
      serverPackageName = '@seatbelt/server-express';
      serverDecoratorName = 'DExpress';
      break;
    case 'Koa':
      serverPackageName = '@seatbelt/server-koa';
      serverDecoratorName = 'DKoa';
      break;
    case 'Hapi':
      serverPackageName = '@seatbelt/server-hapi';
      serverDecoratorName = 'DHapi';
      break;
    default:
      return
  }
  const compiledTemplate = template({
    serverPackageName,
    serverDecoratorName
  })
  fs.writeFileSync(path.join(appPath, 'config', 'server.ts'), compiledTemplate);
};
