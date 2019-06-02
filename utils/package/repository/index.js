const fs = require('../fs')
const parse = require('./parse')
module.exports = context => ({
  get: () => {
    const repository = fs(context).get('repository')
    return typeof repository === 'string'
    ? parse(repository)
    : repository
  }
})
