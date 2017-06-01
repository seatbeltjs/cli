#! /usr/bin/env node
const program = require('commander');
const version = require('./package.json').version;

program
.version(version)
.usage('[options]')
.option('-n, --new <path>', 'Create a new app', require('./commands/create-new-app'))
.parse(process.argv);
