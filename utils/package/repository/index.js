const fs = require('../fs')
const parse = require('./parse')
module.exports = context => ({
  get: () => {
    const repository = fs(context).get('repository')
    if (typeof repository === 'string') return parse(repository)
    const { url = undefined } = repository || {}
    return parse(url)
  }
})
