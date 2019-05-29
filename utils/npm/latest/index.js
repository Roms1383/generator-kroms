const execa = require('execa')
module.exports = dependency => execa.shellSync(`npm view ${dependency} version`).stdout.trim()
