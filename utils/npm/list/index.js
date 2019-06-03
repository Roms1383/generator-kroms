const execa = require('execa')
module.exports = dependency => JSON.parse(execa.shellSync(`npm view ${dependency} versions --json`).stdout)
