const { readdirSync } = require('fs')
const readdirp = require('readdirp')
const fileFilter = ({ path }) => path.indexOf('.git') !== 0
&& path.indexOf('node_modules') !== 0
&& path.indexOf('coverage') !== 0
&& path.indexOf('my-tests') !== 0
const file = async (filename, root = '.', recursive = false) => recursive
? new Promise((resolve) => {
  readdirp(root, { fileFilter, type: 'files_directories' })
  .on('data', ({ basename }) => { if (basename === filename) return resolve(true) })
  .on('end', () => resolve(false))
})
: readdirSync(root).find(basename => basename === filename) !== undefined
const files = async (extension, root = '.') => new Promise((resolve) => {
  readdirp(root, { fileFilter })
  .on('data', ({ basename }) => { if (basename.match(`.${extension}$`) !== null) return resolve(true) })
  .on('end', () => resolve(false))
})
module.exports = { file, files }
