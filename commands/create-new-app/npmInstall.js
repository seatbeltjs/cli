const child = require('child_process');

module.exports = function(appPath) {
  console.log('installing npm files');
  process.chdir(appPath);
  const npm = child.spawn('npm', ['install'], {stdio: 'ignore'});
};
