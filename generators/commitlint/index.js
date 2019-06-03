const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🔎 commitlint')
  }
  async copyTemplates () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.commitlintrc.yml'))
  }
  async syncDependencies () {
    const dependencies = await this.dependencies('commitlint-config-kroms')
    this.package.devDependencies.set(dependencies)
  }
}
