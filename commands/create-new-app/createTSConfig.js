const fs = require('fs');
const path = require('path');

module.exports = function(appPath) {
  console.log('creating TSConfig');
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'tsconfig.json.template'), {'encoding': 'utf8'});
  fs.writeFileSync(path.join(appPath, 'tsconfig.json'), fileData);
};
