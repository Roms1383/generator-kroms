const R = require('ramda')
const NAME = 'package.json'

module.exports = context => {
  const exists = () => context
  && context.fs.exists(context.destinationPath(NAME))
  const read = () => exists()
  && context.fs.read(context.destinationPath(NAME))
  const readJSON = () => exists()
  && context.fs.readJSON(context.destinationPath(NAME))
  const write = content => exists()
  && context.fs.write(context.destinationPath(NAME), content)
  const writeJSON = content => exists()
  && context.fs.writeJSON(context.destinationPath(NAME), content)
  const get = path => Array.isArray(path)
  ? R.path(path, readJSON())
  : path.includes('.')
    ? R.path(path.split('.'), readJSON(context))
    : R.path([path], readJSON(context))
  return {
    exists,
    read,
    readJSON,
    write,
    writeJSON,
    get
  }
}
