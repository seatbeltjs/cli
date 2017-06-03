const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const _ = require('lodash');

module.exports = function(appPath, server) {
  console.log('creating package');
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'package.json.template'), {'encoding': 'utf8'});
  switch (server) {
    case 'Restify':
      serverPackageName = '@seatbelt/server-restify';
      serverPackageVersion = '^0.0.1-alpha.1';
      break;
    case 'Express':
      serverPackageName = '@seatbelt/server-express';
      serverPackageVersion = '^0.0.1-alpha.1';
      break;
    case 'Koa':
      serverPackageName = '@seatbelt/server-koa';
      serverPackageVersion = '^0.0.1-alpha.1';
      break;
    case 'Hapi':
      serverPackageName = '@seatbelt/server-hapi';
      serverPackageVersion = '^0.0.1-alpha.1';
      break;
    default:
      return
  };
  const template = _.template(fileData);
  const compiledTemplate = template({
    serverPackageName,
    serverPackageVersion,
    corePackageVersion: '^0.0.1-alpha.2',
    ormPackageName: '@seatbelt/orm-waterline',
    ormPackageVersion: '^0.0.1-alpha.2'
  })
  fs.writeFileSync(path.join(appPath, 'package.json'), compiledTemplate);
};
