const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = function(appPath) {
  console.log('creating sample model');
  mkdirp(path.join(appPath, 'models'));
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'model.ts.template'), {'encoding': 'utf8'});
  fs.writeFileSync(path.join(appPath, 'models', 'model_example.ts'), fileData);
};
