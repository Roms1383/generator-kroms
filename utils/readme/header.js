const R = require('ramda')
const arrayify = require('../arrayify')
module.exports = (context, options) => {
  const optional = {}
  // no need to add npm badge if there's no release and it never has been published yet
  optional.npm = options.released || context.npm.latest(context.package.name.get())
  ? ['npm']
  : []
  // no need to add codacy badges if there's no unit-test
  optional.coverage = options.tested && options.covered
  ? ['codacy.quality', 'codacy.coverage']
  : []
  // no need to add semantic-release badge if there's no release
  optional.release = options.released
  ? ['semantic']
  : []
  const set = [
    ...optional.npm,
    'license',
    'travis',
    ...optional.coverage,
    'renovate',
    'snyk',
    'david',
    ...optional.release,
    'gitmoji'
  ]
  const methods = require('../badge')(context, set)
  const badges = set
  .map(name => R.path(arrayify(name), methods)())
  .join(' ')
  const name = require('../package/name')(context).get()
  const description = require('../package/description')(context).get()
  const parts = [`# ${name}`, badges]
  if (description) parts.push(description)
  return parts.join('\n\n')
}
