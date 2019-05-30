const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('💻 nvm')
  }
  configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.nvmrc'), { node: '8.12.0' })
  }
}
