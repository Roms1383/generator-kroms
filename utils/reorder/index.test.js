const sort = require('.')
describe('sort-object', () => {
  it('reorder properties alphabetically', () => {
    expect(sort({ b: 1, d: 1, a: 1, c: 1 })).toEqual({ a: 1, b: 1, c: 1, d: 1 })
  })
})
