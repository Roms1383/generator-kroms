const fs = require('fs')
const path = require('path')
module.exports = (at, extension) => fs.readdirSync(path.resolve(at))
.find(filename => filename.match(`.${extension}$`))
!== undefined
