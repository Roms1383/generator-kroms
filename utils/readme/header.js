const R = require('ramda')
const arrayify = require('../arrayify')
module.exports = (context, tested) => {
  const badge = require('../badge')(context)
  // no need to add codacy badges if there's no unit-test
  const additional = tested
  ? ['codacy.quality', 'codacy.coverage']
  : []
  const badges = [
    'npm',
    'license',
    'travis',
    ...additional,
    'renovate',
    'snyk',
    'david',
    'semantic',
    'gitmoji'
  ]
  .map(name => R.path(arrayify(name), badge)())
  .join(' ')
  const name = require('../package/name')(context).get()
  const description = require('../package/description')(context).get()
  const parts = [`# ${name}`, badges]
  if (description) parts.push(description)
  return parts.join('\n\n')
}
