const fs = require('./fs')
const author = require('./author')
const license = require('./license')
module.exports = context => ({
  fs: fs(context),
  ...author(context),
  ...license(context)
})
