const parse = require('./parse')
const sample = `{ eslint: '^5.16.0',
'eslint-config-standard': '^12.0.0',
'eslint-plugin-import': '^2.17.3',
'eslint-plugin-node': '^9.1.0',
'eslint-plugin-promise': '^4.1.1',
'eslint-plugin-standard': '^4.0.0' }`
describe('parse', () => {
  it('dependencies with versions (default)', () => {
    const expected = [
      'eslint@^5.16.0',
      'eslint-config-standard@^12.0.0',
      'eslint-plugin-import@^2.17.3',
      'eslint-plugin-node@^9.1.0',
      'eslint-plugin-promise@^4.1.1',
      'eslint-plugin-standard@^4.0.0'
    ]
    const peers = parse(sample)
    expect(peers).toEqual(expect.arrayContaining(expected))
  })
  it('dependencies without versions', () => {
    const expected = [
      'eslint',
      'eslint-config-standard',
      'eslint-plugin-import',
      'eslint-plugin-node',
      'eslint-plugin-promise',
      'eslint-plugin-standard'
    ]
    const peers = parse(sample, false)
    expect(peers).toEqual(expect.arrayContaining(expected))
  })
  it('when no output', () => {
    const peers = parse('')
    expect(peers).toEqual([])
  })
})
