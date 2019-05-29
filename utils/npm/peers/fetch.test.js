const fetch = require('./fetch')
describe('fetch', () => {
  it('npm view <module> peerDependencies', async () => {
    const output = await fetch('eslint-config-kroms')
    expect(output).toBeDefined()
    expect(typeof output).toEqual('string')
  })
})
