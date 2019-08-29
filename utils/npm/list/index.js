const execa = require('execa')
module.exports = dependency => JSON.parse(execa.commandSync(`npm view ${dependency} versions --json`).stdout)
