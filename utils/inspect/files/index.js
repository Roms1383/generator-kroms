const fs = require('fs')
const path = require('path')
module.exports = at => fs.readdirSync(path.resolve(at))
.filter(file => fs.lstatSync(path.resolve(at, file)).isFile())
