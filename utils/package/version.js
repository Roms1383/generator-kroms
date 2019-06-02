const fs = require('./fs')
module.exports = context => ({
  get: () => fs(context).get('version'),
  set: version => fs(context).override('version', version)
})
