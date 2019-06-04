const R = require('ramda')
const fs = require('./fs')
module.exports = context => ({
  get: (alias) => alias
  ? R.path(['scripts', alias], fs(context).readJSON())
  : fs(context).get('scripts'),
  set: (alias, command) => fs(context).merge('scripts', { [alias]: command }),
  unset: aliases => fs(context).unset('scripts', aliases)
})
