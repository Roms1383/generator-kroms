const fs = require('./fs')
module.exports = context => ({
  get: () => fs(context).get('scripts'),
  set: (alias, command) => fs(context).merge('scripts', { [alias]: command }),
  unset: aliases => fs(context).unset('scripts', aliases)
})
