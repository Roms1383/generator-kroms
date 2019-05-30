const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🤖 renovate')
  }
  configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.renovaterc'))
  }
}
