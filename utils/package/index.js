const fs = require('./fs')
const name = require('./name')
const author = require('./author')
const license = require('./license')
const repository = require('./repository')
const main = require('./main')
const files = require('./files')
const description = require('./description')
const keywords = require('./keywords')
const scripts = require('./scripts')
module.exports = context => ({
  fs: fs(context),
  name: name(context),
  author: author(context),
  license: license(context),
  repository: repository(context),
  main: main(context),
  files: files(context),
  description: description(context),
  keywords: keywords(context),
  scripts: scripts(context)
})
