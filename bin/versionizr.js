#!/usr/bin/env node

'use strict';
/**
 * Versionizr v0.0.1
 * 
 * @author Collin Grimm <collin.grimm@protonmail.ch>
 * @copyright 2017 Collin Grimm (and other contributors)
 * @license MIT License https://collingrimm.me/LICENSE.txt
 */

const versionizr = require('../lib/index.js');
const fs = require('fs');
var args = process.argv.splice(process.execArgv.length + 2);

const version = args[0];

if (!fs.existsSync('package.json')) {
    console.error(`No "package.json" found. Verify that the file exist`);
    return;
}
versionizr.Version(version);
