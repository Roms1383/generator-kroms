const execa = require('execa')
module.exports = dependency => execa.commandSync(`npm view ${dependency} peerDependencies`).stdout.trim()
