const Yeoman = require('yeoman-generator')
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
}
