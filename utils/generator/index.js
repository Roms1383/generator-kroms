const Yeoman = require('yeoman-generator')
const boxen = require('boxen')
const fixed = require('fixed-width-string')
module.exports = class Generator extends Yeoman {
  constructor (args, opts) {
    super(args, opts)
    this.npm = require('../npm')
    this.package = require('../package')(this)
  }
  async dependencies (name) {
    const latest = await this.npm.latest(name)
    const dependency = `${name}@^${latest}`
    const peers = await this.npm.peers(dependency)
    const message = peers.length > 0
    ? `${dependency} (peers : ${peers.join(', ')})`
    : `${dependency} (no peers)`
    this.log(message)
    return [dependency, ...peers]
  }
  box (message) { this.log(boxen(fixed(message, 20), { margin: 0, borderStyle: 'round', borderColor: 'gray' })) }
}
