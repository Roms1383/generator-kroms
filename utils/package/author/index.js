const fs = require('../fs')
const parse = require('./parse')
module.exports = context => {
  const get = () => {
    const author = fs(context).get('author')
    if (!author) return undefined
    if (typeof author === 'string') return parse(author)
    return author
  }
  return { get }
}
