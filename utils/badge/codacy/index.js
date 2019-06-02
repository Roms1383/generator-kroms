const quality = require('./quality')
const coverage = require('./coverage')
module.exports = context => (owner, repository) => {
  const id = process.env.CODACY_PROJECT_ID
  if (!id) context.fail('CODACY_PROJECT_ID is required to set Codacy badges')
  return {
    quality: () => quality(id, owner, repository),
    coverage: () => coverage(id, owner, repository)
  }
}
