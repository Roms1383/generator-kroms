const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('📋 remark-lint')
  }
  async install () {
    this.log('remark-cli, remark-cli, remark-preset-lint-recommended')
    this.yarnInstall(['remark-cli', 'remark-cli', 'remark-preset-lint-recommended'], { dev: true })
  }
  configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.remarkrc'))
  }
}
