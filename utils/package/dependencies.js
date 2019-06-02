const fs = require('./fs')
module.exports = context => ({
  get: () => fs(context).get('dependencies'),
  set: dependencies => fs(context).merge('dependencies', dependencies, true),
  unset: dependencies => fs(context).unset('dependencies', Object.keys(dependencies))
})
