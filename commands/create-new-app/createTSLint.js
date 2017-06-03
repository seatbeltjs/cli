const fs = require('fs');
const path = require('path');

module.exports = function(appPath) {
  console.log('creating TSLint');
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'tslint.json.template'), {'encoding': 'utf8'});
  fs.writeFileSync(path.join(appPath, 'tslint.json'), fileData);
};
