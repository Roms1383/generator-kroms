const parse = require('./parse')
module.exports = context => {
  const generate = (tested) => {
    const delimiter = '*****'
    const at = context.destinationPath('README.md')
    const existing = context.fs.exists(at)
    ? context.fs.read(at, 'utf8')
    : undefined
    const disclaimer = 'documentation will be coming soon...'
    if (!existing) context.warn('README.md', 'it will be auto-generated but content should be updated')
    const content = existing
    ? parse(existing, delimiter)
    : disclaimer
    if (content) {
      const header = require('./header')(context, tested)
      const footer = require('./footer')(context)
      const generated = `${[header, content, footer].join(`\n\n${delimiter}\n\n`)}\n`
      context.fs.write(at, generated)
    } else context.warn('delimiter in existing README.md', 'please update it manually')
  }
  return { generate }
}
