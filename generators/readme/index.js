const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('📖 readme')
  }
  configuring () {
    this.task(`generating README.md...`)
    const { tested, covered, released } = this
    this.readme.generate({ tested, covered, released })
  }
}
