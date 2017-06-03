const fs = require('fs');
const path = require('path');

module.exports = function(appPath) {
  console.log('creating gitignore');
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', '.gitignore.template'), {'encoding': 'utf8'});
  fs.writeFileSync(path.join(appPath, '.gitignore'), fileData);
};
