const codacy = require('./codacy')
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
  const id = process.env.CODACY_PROJECT_ID
  if (!id) context.fail('CODACY_PROJECT_ID is required to set badges')
  const name = require('../package/name')(context).get()
  return {
    codacy: codacy(id, owner, repository),
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
