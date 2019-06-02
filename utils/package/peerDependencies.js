const fs = require('./fs')
module.exports = context => ({
  get: () => fs(context).get('peerDependencies'),
  set: dependencies => fs(context).merge('peerDependencies', dependencies, true),
  unset: dependencies => fs(context).unset('peerDependencies', Object.keys(dependencies))
})
