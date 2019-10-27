module.exports = (context, specifics = undefined) => {
  const requested = specifics && specifics.length > 0
  ? specifics
  : ['codacy.coverage', 'codacy.quality', 'david', 'gitmoji', 'license', 'npm', 'renovate', 'semantic', 'travis']
  const { owner, repository } = require('../package/repository')(context).get()
  const name = require('../package/name')(context).get()
  const output = {}
  if (requested.some(i => i.match(/^codacy/i) !== null)) output.codacy = require('./codacy')(context)(owner, repository)
  if (requested.includes('david')) output.david = () => require('./david')(owner, repository)
  if (requested.includes('gitmoji')) output.gitmoji = require('./gitmoji')
  if (requested.includes('license')) output.license = require('./license')
  if (requested.includes('npm')) output.npm = () => require('./npm')(owner, repository, name)
  if (requested.includes('renovate')) output.renovate = require('./renovate')
  if (requested.includes('semantic')) output.semantic = require('./semantic-release')
  if (requested.includes('travis')) output.travis = () => require('./travis')(owner, repository)
  return output
}
