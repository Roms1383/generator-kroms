const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.log('renovate')
  }
  writing () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.renovaterc'))
  }
}
