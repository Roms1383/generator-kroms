const { readdirSync } = require('fs')
const readdirp = require('readdirp').promise
const file = async (filename, root = '.', recursive = false) => recursive
? readdirp(root, { fileFilter: filename, type: 'files_directories' })
.then(results => results.length > 0)
: readdirSync(root).find(basename => basename === filename) !== undefined
const files = async (extension, root = '.') => readdirp(root, {
  fileFilter: `*.${extension}`,
  directoryFilter: ['!.git', '!node_modules', '!coverage', '!my-tests']
})
.then(results => results.length > 0)
module.exports = { file, files }
