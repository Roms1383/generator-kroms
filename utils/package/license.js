const fs = require('./fs')
module.exports = context => ({ license: () => fs(context).get('license') })
