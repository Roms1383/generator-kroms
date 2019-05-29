const fs = require('./fs')
const author = require('./author')
const license = require('./license')
const scripts = require('./scripts')
module.exports = context => ({
  fs: fs(context),
  scripts: scripts(context),
  ...author(context),
  ...license(context)
})
