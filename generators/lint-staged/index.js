const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🚫 lint-staged')
  }

  async copyTemplates () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.lintstagedrc'))
  }

  async syncDependencies () {
    const dependencies = await this.dependencies('lint-staged')
    this.package.devDependencies.set(dependencies)
  }
}
