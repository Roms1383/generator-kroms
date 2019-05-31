const fs = require('./fs')
module.exports = context => ({
  get: () => fs(context).get('license'),
  set: license => fs(context).override('license', license)
})
