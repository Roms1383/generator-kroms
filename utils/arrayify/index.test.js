const arrayify = require('.')
describe('arrayify', () => {
  it('with nil', () => {
    expect(arrayify(undefined)).toEqual(undefined)
    expect(arrayify(null)).toEqual(null)
  })
  it('with primitive', () => {
    expect(arrayify('something')).toEqual(['something'])
  })
  it('with array', () => {
    expect(arrayify(['something'])).toEqual(['something'])
  })
  it('with dot notation', () => {
    expect(arrayify('something.else')).toEqual(['something', 'else'])
  })
})
