const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = function(appPath) {
  console.log('creating route');
  mkdirp(path.join(appPath, 'routes'));
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'route.ts.template'), {'encoding': 'utf8'});
  fs.writeFileSync(path.join(appPath, 'routes', 'route-example.ts'), fileData);
};
