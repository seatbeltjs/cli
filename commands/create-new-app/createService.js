const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = function(appPath) {
  console.log('creating service');
  mkdirp(path.join(appPath, 'services'));
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'service.ts.template'), {'encoding': 'utf8'});
  fs.writeFileSync(path.join(appPath, 'services', 'service-example.ts'), fileData);
};
