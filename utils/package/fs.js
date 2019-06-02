const R = require('ramda')
const NAME = 'package.json'
const arrayify = require('../arrayify')
const reorder = require('../reorder')
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
  const extendJSON = content => exists()
  && context.fs.extendJSON(context.destinationPath(NAME), content)
  const get = path => R.path(arrayify(path), readJSON())
  const override = (path, value) => {
    const current = readJSON()
    const lens = R.lensPath(arrayify(path))
    const modified = R.set(lens, value, current)
    writeJSON(modified)
  }
  const merge = (path, value, sort = false) => {
    path = arrayify(path)
    const current = readJSON()
    const lens = R.lensPath(path)
    const existing = R.path(path, current)
    const merged = { ...existing, ...value }
    const modified = R.set(lens, sort ? reorder(merged) : merged, current)
    writeJSON(modified)
  }
  const unset = (path, names) => {
    path = arrayify(path)
    names = arrayify(names)
    const current = readJSON()
    const lens = R.lensPath(path)
    const existing = R.path(path, current)
    const stripped = Object.keys(existing)
    .filter(key => !names.includes(key))
    .reduce((stripped, key) => ({ ...stripped, [key]: existing[key] }), {})
    const modified = R.set(lens, stripped, current)
    writeJSON(modified)
  }
  return {
    exists,
    read,
    readJSON,
    write,
    writeJSON,
    extendJSON,
    get,
    override,
    merge,
    unset
  }
}
