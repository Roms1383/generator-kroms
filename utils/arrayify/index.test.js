const arrayify = require('.')
describe('arrayify', () => {
  const expected = ['something']
  it('with primitive', () => {
    expect(arrayify('something')).toEqual(expected)
  })
  it('with array', () => {
    expect(arrayify(['something'])).toEqual(expected)
  })
  it('with dot notation', () => {
    expect(arrayify('something.else')).toEqual(['something', 'else'])
  })
})
