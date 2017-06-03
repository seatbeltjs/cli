const fs = require('fs');
const path = require('path');

module.exports = function(appPath) {
  console.log('creating index');
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'index.js.template'), {'encoding': 'utf8'});
  fs.writeFileSync(path.join(appPath, 'index.js'), fileData);
};
