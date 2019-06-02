const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('📖 readme')
  }
  configuring () {
    this.readme.generate()
  }
}
