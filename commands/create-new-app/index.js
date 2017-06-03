const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const emptyDir = require('empty-dir');
const mkdirp = require('mkdirp');
const _ = require('lodash');

const createIndex = require('./createIndex.js');
const createGitIgnore = require('./createGitIgnore.js');
const createModel = require('./createModel.js');
const createPackage = require('./createPackage.js');
const createPolicy = require('./createPolicy.js');
const createRoute = require('./createRoute.js');
const createService = require('./createService.js');
const createServer = require('./createServer.js');
const createTSConfig = require('./createTSConfig.js');
const createTSLint = require('./createTSLint.js');
const npmInstall = require('./npmInstall.js');

const createAllFiles = function(appPath, server) {
  createIndex(appPath);
  createGitIgnore(appPath);
  createModel(appPath);
  createPackage(appPath, server);
  createPolicy(appPath);
  createRoute(appPath);
  createService(appPath);
  createServer(appPath, server);
  createTSConfig(appPath);
  createTSLint(appPath);
  npmInstall(appPath);
};

module.exports = function (appPath) {
  if (!appPath || (appPath && typeof appPath !== 'string')) {
    console.log('appPath is required to make a new seatbelt app');
  }
  appPath = path.join(process.cwd(), ...appPath.split('/'));
  const appPathExist = require('fs').existsSync(appPath);
  if (!appPathExist) {
    appPathCreated = require("mkdirp").sync(appPath);
    console.log('created', appPathCreated);
  }
  const result = emptyDir.sync(appPath);
  if (!result) {
    return console.log('directory is not empty');
  } else {
    return inquirer.prompt([
      {
        type: 'list',
        message: 'Select a server to use, then press [enter] to continue',
        name: 'options',
        choices: [
          {
            name: 'Restify'
          },
          {
            name: 'Express'
          },
          {
            name: 'Koa'
          },
          {
            name: 'Hapi'
          },
        ]
      }
    ])
    .then(answer => {
      const server = answer.options;
      console.log('creating app in appPath', appPath);
      createAllFiles(appPath, server);
    });
  }
}
