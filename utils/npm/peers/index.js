const fetch = require('./fetch')
const parse = require('./parse')
module.exports = async dependency => {
  const output = await fetch(dependency)
  return parse(output)
}
