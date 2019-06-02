const parse = require('./parse')
describe('parse', () => {
  it('correctly formatted', () => {
    const content = `# module\n\ndescription\n\n*****\n\nsomething\n\n*****\n\n**footer**`
    expect(parse(content)).toBe('something')
  })
  it('single delimiter', () => {
    const content = `# module\n\n*****\n\nsomething\n\n**footer**`
    expect(parse(content)).toBe(undefined)
  })
  it('incorrect delimiters', () => {
    const content = `# module\n\n***\n\nsomething\n\n***\n\n**footer**`
    expect(parse(content)).toBe(undefined)
  })
  it('no delimiters', () => {
    const content = `# module\n\nsomething\n\n**footer**`
    expect(parse(content)).toBe(undefined)
  })
  it('undefined', () => {
    expect(parse(undefined)).toBe(undefined)
  })
})
