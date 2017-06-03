const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = function(appPath) {
  console.log('creating policy');
  mkdirp(path.join(appPath, 'policies'));
  const fileData = fs.readFileSync(path.join(__dirname, 'templates', 'policy.ts.template'), {'encoding': 'utf8'});
  fs.writeFileSync(path.join(appPath, 'policies', 'policy_example.ts'), fileData);
};
