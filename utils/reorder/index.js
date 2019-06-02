module.exports = object => Object.keys(object)
.sort()
.reduce((sorted, key) => ({ ...sorted, [key]: object[key] }), {})
