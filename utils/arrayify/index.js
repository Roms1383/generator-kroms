module.exports = variable => Array.isArray(variable)
? variable
: typeof variable === 'string' && variable.indexOf('.')
  ? variable.split('.')
  : [variable]
