const latest = require('.')
describe('latest', () => {
  it('dependency version', async () => {
    const version = await latest('eslint-config-kroms')
    expect(version).toBeDefined()
  })
})
