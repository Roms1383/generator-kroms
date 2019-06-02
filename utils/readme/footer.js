module.exports = context => {
  const { name } = require('../package/author')(context).get()
  const license = require('../package/license')(context).get()
  const year = context.config.get('year')
  return `_${name} - ${license} - ${year}_`
}
