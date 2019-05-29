const fs = require('./fs')
module.exports = context => ({
  get: () => fs(context).get('scripts'),
  set: (alias, command) => {
    const existing = fs(context).get('scripts') || {}
    const set = { [alias]: command }
    const merged = { scripts: { ...existing, ...set } }
    const manifest = fs(context).readJSON()
    fs(context).writeJSON({ ...manifest, ...merged })
  }
})
