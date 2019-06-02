const david = require('./david')
const gitmoji = require('./gitmoji')
const license = require('./license')
const npm = require('./npm')
const renovate = require('./renovate')
const semantic = require('./semantic-release')
const snyk = require('./snyk')
const travis = require('./travis')
module.exports = context => {
  const { owner, repository } = require('../package/repository')(context).get()
  const name = require('../package/name')(context).get()
  const codacy = require('./codacy')(context)
  return {
    codacy: codacy(owner, repository),
    david: () => david(owner, repository),
    gitmoji,
    license,
    npm: () => npm(owner, repository, name),
    renovate,
    semantic,
    snyk: () => snyk(owner, repository),
    travis: () => travis(owner, repository)
  }
}
