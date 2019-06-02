const parse = require('./parse')
describe('parse', () => {
  it('correctly formatted', () => {
    expect(parse('https://github.com/Roms1383/generator-kroms')).toEqual({ owner: 'Roms1383', repository: 'generator-kroms' })
  })
  it('incorrectly formatted', () => {
    expect(parse('https://github.com/Roms1383')).toBe(null)
  })
  it('empty string', () => {
    expect(parse('')).toBe(undefined)
  })
  it('undefined', () => {
    expect(parse(undefined)).toBe(undefined)
  })
})
