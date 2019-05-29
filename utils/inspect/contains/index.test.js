const contains = require('.')
describe('contains', () => {
  it('existing file', () => {
    expect(contains(__dirname, 'js')).toBe(true)
  })
  it('unknown file', () => {
    expect(contains(__dirname, 'unknown')).toBe(false)
  })
})
