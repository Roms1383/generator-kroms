const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('💻 nvm')
  }

  async copyTemplates () {
    const node = this.config.get('use-aws-lambda')
    ? '10.16.3'
    : '10.17.0'
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.nvmrc'), { node })
  }
}
