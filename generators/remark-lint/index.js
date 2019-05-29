const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  async install () {
    this.log('remark-cli, remark-cli, remark-preset-lint-recommended')
    this.yarnInstall(['remark-cli', 'remark-cli', 'remark-preset-lint-recommended'], { dev: true })
  }
  writing () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.remarkrc'))
  }
}
