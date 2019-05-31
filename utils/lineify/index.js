module.exports = content => content
.split('\n')
.map(line => line.trim())
.filter(line => line !== '' && line.match(/^#/) === null)
