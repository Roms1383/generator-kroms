const parse = require('./parse')
describe('parse', () => {
  it('none', () => {
    const { name = undefined, email = undefined, website = undefined } = parse('')
    expect(name).toBeUndefined()
    expect(email).toBeUndefined()
    expect(website).toBeUndefined()
  })
  it('name only', () => {
    const { name = undefined, email = undefined, website = undefined } = parse('John DOE')
    expect(name).toEqual('John DOE')
    expect(email).toBeUndefined()
    expect(website).toBeUndefined()
  })
  it('name and email', () => {
    const { name = undefined, email = undefined, website = undefined } = parse('John DOE <john.doe@email.com>')
    expect(name).toEqual('John DOE')
    expect(email).toEqual('john.doe@email.com')
    expect(website).toBeUndefined()
  })
  it('name and website', () => {
    const { name = undefined, email = undefined, website = undefined } = parse('John DOE (https://john-doe.me)')
    expect(name).toEqual('John DOE')
    expect(email).toBeUndefined()
    expect(website).toEqual('https://john-doe.me')
  })
  it('email and website', () => {
    const { name = undefined, email = undefined, website = undefined } = parse('<john.doe@email.com> (https://john-doe.me)')
    expect(name).toBeUndefined()
    expect(email).toEqual('john.doe@email.com')
    expect(website).toEqual('https://john-doe.me')
  })
  it('name, email and website', () => {
    const { name = undefined, email = undefined, website = undefined } = parse('John DOE <john.doe@email.com> (https://john-doe.me)')
    expect(name).toEqual('John DOE')
    expect(email).toEqual('john.doe@email.com')
    expect(website).toEqual('https://john-doe.me')
  })
})
