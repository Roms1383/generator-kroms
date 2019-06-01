const fs = require('./fs')
module.exports = context => ({
  get: () => fs(context).get('devDependencies'),
  set: dependencies => fs(context).merge('devDependencies', dependencies, true)
})
