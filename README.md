# versionizr
Easily update the version of your nodejs module before publishing.  
This module would change the value of the `version` field in the `package.json` file   
to the new value specified.

### Install
`npm install -g versionizr`

NOTE: I made this with the intention of global installation.

### Usage
In the project's root directory,

`versionizr {newVersionNumber}`

Where `{newVersionNumber}` is the new version of your module.

### Example
`versionizr 1.2.3`

Changes the version number from `{n}` to `1.2.3`.  
NOTE: The version number should follow the [Semantic Versioning](https://docs.npmjs.com/getting-started/semantic-versioning) convention

### License
Licensed under the [MIT License](https://collingrimm.me/LICENSE.txt)
