const path = require('path')
const files = require('.')
describe('files', () => {
  it('where none', () => {
    expect(files(path.resolve(__dirname, 'empty'))).toHaveLength(0)
  })
  it('where some', () => {
    expect(files(path.resolve(__dirname)).length).toBeGreaterThan(0)
  })
})
