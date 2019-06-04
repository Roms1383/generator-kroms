const latest = require('.')
describe('latest', () => {
  it('existing package version', () => {
    const version = latest('eslint-config-kroms')
    expect(version).toBeDefined()
    expect(typeof version).toBe('string')
    expect(version.length).toBeGreaterThanOrEqual(5)
  })
  it('unknown package version', () => {
    expect(latest('unknown~package')).toBeUndefined()
  })
})
