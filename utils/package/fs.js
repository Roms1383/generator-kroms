const R = require('ramda')
const NAME = 'package.json'
const arrayify = require('../arrayify')
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
  const override = (path, value) => {
    const current = readJSON()
    const lens = R.lensPath(arrayify(path))
    const modified = R.set(lens, value, current)
    writeJSON(modified)
  }
  const merge = (path, value, sort = false) => {
    const reorder = object => Object.keys(object)
    .sort()
    .reduce((sorted, key) => ({ ...sorted, [key]: object[key] }), {})
    const current = readJSON()
    const lens = R.lensPath(arrayify(path))
    const existing = R.path(arrayify(path), current)
    const merged = { ...existing, ...value }
    const modified = R.set(lens, sort ? reorder(merged) : merged, current)
    writeJSON(modified)
  }
  return {
    exists,
    read,
    readJSON,
    write,
    writeJSON,
    get,
    override,
    merge
  }
}
