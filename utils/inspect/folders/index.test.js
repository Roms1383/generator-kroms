const path = require('path')
const folders = require('.')
describe('folders', () => {
  it('where none', () => {
    expect(folders(__dirname)).toHaveLength(0)
  })
  it('where some', () => {
    expect(folders(path.resolve(__dirname, '..')).length).toBeGreaterThan(0)
  })
})
