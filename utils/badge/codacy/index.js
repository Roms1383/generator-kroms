const quality = require('./quality')
const coverage = require('./coverage')
module.exports = (id, owner, repository) => ({
  quality: () => quality(id, owner, repository),
  coverage: () => coverage(id, owner, repository)
})
