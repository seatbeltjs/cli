module.exports = function (path) {
  if (!path || (path && typeof path !== 'string')) {
    console.log('path is required to make a new seatbelt app');
  }
  const pathExist = require('fs').existsSync(path);
  if (!pathExist) {
    require("mkdirp").sync(path);
  }
  const emptyDir = require('empty-dir');
  const result = emptyDir.sync(path);
  if (!result) {
    console.log('directory is not empty');
    throw new Error('Directory new app to be created in is not empty');
  } else {
    console.log('creating app in path', path);
  }
}
