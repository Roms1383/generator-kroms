const R = require('ramda')
module.exports = variable => R.isNil(variable)
? variable
: Array.isArray(variable)
  ? variable
  : typeof variable === 'string' && variable.indexOf('.')
    ? variable.split('.')
    : [variable]
