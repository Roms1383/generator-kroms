const fs = require('./fs')
const scoped = require('./scoped')
const name = require('./name')
const author = require('./author')
const license = require('./license')
const repository = require('./repository')
const main = require('./main')
const files = require('./files')
const description = require('./description')
const keywords = require('./keywords')
const dependencies = require('./dependencies')
const devDependencies = require('./devDependencies')
const peerDependencies = require('./peerDependencies')
const scripts = require('./scripts')
module.exports = context => ({
  fs: fs(context),
  scoped,
  name: name(context),
  author: author(context),
  license: license(context),
  repository: repository(context),
  main: main(context),
  files: files(context),
  description: description(context),
  keywords: keywords(context),
  dependencies: dependencies(context),
  devDependencies: devDependencies(context),
  peerDependencies: peerDependencies(context),
  scripts: scripts(context)
})
