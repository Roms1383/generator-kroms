const fs = require('fs')
const path = require('path')
const files = require('.')
describe('files', () => {
  it('where none', () => {
    fs.mkdirSync(path.resolve(__dirname, 'empty'))
    expect(files(path.resolve(__dirname, 'empty'))).toHaveLength(0)
    fs.rmdirSync(path.resolve(__dirname, 'empty'))
  })
  it('where some', () => {
    expect(files(path.resolve(__dirname)).length).toBeGreaterThan(0)
  })
})
