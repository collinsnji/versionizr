'use strict';

/**
 * Versionizr v0.0.1
 * 
 * @author Collin Grimm <collin.grimm@protonmail.ch>
 * @copyright 2017 Collin Grimm (and other contributors)
 * @license MIT License https://collingrimm.me/LICENSE.txt
 */

const fs = require('fs');
const path = require('path');
/**
 * Update the version number in the package.json file with one command
 * @param {Number} version New Version number for module
 */
var Versionizr = function Versionizr(version) {
    var packageFile = JSON.parse(
        fs.readFileSync('package.json', 'utf8',
            (err) => {
                if (err) throw new Error(`"package.json" could not be opened. Check that the file exist.`);
            }
        )
    );

    if (VersionChecker(packageFile['version'], version)) {
        console.log('Module version is already up-to-date. Bye!');
        return;
    } else {
        packageFile['version'] = version;
        console.log(`Updating version...`);
        fs.writeFile('package.json', JSON.stringify(packageFile, null, '\t'), 'utf8',
            (err) => {
                if (err) throw new Error('Version update failed. Unable to write file to filesystem');
            }
        );
        console.log(`Version updated to ${version}`);
    }
    return;
}

var VersionChecker = function VersionChecker(currentVersion, newVersion) {
    if (currentVersion == newVersion) return true;
}
module.exports.Version = Versionizr;
