const scoped = require('./scoped')
describe('scoped', () => {
  it('scoped package', () => {
    expect(scoped('generator-kroms')).toBe(false)
  })
  it('non-scoped package', () => {
    expect(scoped('@Roms1383/generator-kroms')).toBe(true)
  })
  it('empty string', () => {
    expect(scoped('')).toBe(undefined)
  })
  it('undefined', () => {
    expect(scoped(undefined)).toBe(undefined)
  })
})
