const execa = require('execa')
module.exports = dependency => {
  try {
    return execa.shellSync(`npm view ${dependency} version`).stdout.trim()
  } catch (e) {
    return undefined
  }
}
