const Yeoman = require('yeoman-generator')
const format = require('../format')
module.exports = class Generator extends Yeoman {
  constructor (args, opts) {
    super(args, opts)
    this.npm = require('../npm')
    this.package = require('../package')(this)
    this.readme = require('../readme')(this)
    this.inspect = require('../inspect')
    this.lineify = require('../lineify')
    this.arrayify = require('../arrayify')
  }
  async dependencies (name) {
    const latest = await this.npm.latest(name)
    const dependency = `${name}@^${latest}`
    const peers = await this.npm.peers(dependency)
    const message = peers.length > 0
    ? `${dependency} (peers : ${peers.join(', ')})`
    : `${dependency} (no peers)`
    this.log(message)
    return {
      [name]: `^${latest}`,
      ...peers
      .reduce((obj, peer) => {
        const before = peer.lastIndexOf('@')
        const name = peer.substr(0, before)
        const version = peer.substr(before + 1, peer.length - before - 1)
        return { ...obj, [name]: version }
      }, {})
    }
  }
  box (message) { this.log(format.box(message)) }
  warn (causes, suggestion = undefined, solutions = undefined) { this.log(format.recommended(causes, suggestion, solutions)) }
  fail (causes, suggestion = undefined, solutions = undefined) {
    this.log(format.mandatory(causes, suggestion, solutions))
    process.exit(0)
  }
}
