const fs = require('./fs')
module.exports = context => ({
  get: () => fs(context).get('name')
})
