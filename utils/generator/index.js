const Yeoman = require('yeoman-generator')
const format = require('../format')
module.exports = class Generator extends Yeoman {
  constructor (args, opts) {
    super(args, opts)
    this.npm = require('../npm')
    this.package = require('../package')(this)
    this.inspect = require('../inspect')
    this.lineify = require('../lineify')
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
  box (message) { this.log(format.box(message)) }
  warn (causes, suggestion = undefined, solutions = undefined) { this.log(format.recommended(causes, suggestion, solutions)) }
  fail (causes, suggestion = undefined, solutions = undefined) {
    this.log(format.mandatory(causes, suggestion, solutions))
    process.exit(0)
  }
}
