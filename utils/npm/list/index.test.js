const list = require('.')
describe('latest', () => {
  it('dependency versions', async () => {
    const versions = await list('generator-kroms')
    expect(versions).toBeDefined()
    expect(Array.isArray(versions)).toBe(true)
  })
})
