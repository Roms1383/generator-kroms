const { file, files } = require('.')
describe('introspect', () => {
  describe('file', () => {
    it('with existing file', async () => {
      expect(await file('package.json')).toBe(true)
      expect(await file('inspect', '.', true)).toBe(true)
    })
    it('with missing file', async () => {
      expect(await file('dummy.bip')).toBe(false)
      expect(await file('package.json', './generators', false)).toBe(false)
    })
  })
  describe('files', () => {
    it('with existing extension', async () => {
      expect(await files('js')).toBe(true)
    })
    it('with missing extension', async () => {
      expect(await files('unknown')).toBe(false)
    }, 8000)
  })
})
