const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🤖 renovate')
  }
  async copyTemplates () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.renovaterc'))
  }
}
