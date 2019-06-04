const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🔎 commitlint')
  }
  async copyTemplates () {
    if (this.fs.exists(this.destinationPath('.commitlintrc.yml'))) this.fs.move(this.destinationPath('.commitlintrc.yml'), this.destinationPath('.commitlintrc'))
    else this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.commitlintrc'))
  }
  async syncDependencies () {
    const dependencies = await this.dependencies('commitlint-config-kroms')
    this.package.devDependencies.set(dependencies)
  }
}
