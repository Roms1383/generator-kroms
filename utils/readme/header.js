const R = require('ramda')
const arrayify = require('../arrayify')
module.exports = context => {
  const badge = require('../badge')(context)
  const badges = [
    'npm',
    'license',
    'travis',
    'codacy.quality',
    'codacy.coverage',
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
