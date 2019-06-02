const PATTERN = /^@[a-zA-Z0-9-_]+\//
module.exports = name => !name || name.length === 0
? undefined
: name.match(PATTERN) !== null
