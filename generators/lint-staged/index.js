const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🚫 lint-staged')
  }
  async configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.lintstagedrc'))
    const dependencies = await this.dependencies('lint-staged')
    this.package.devDependencies.set(dependencies)
  }
}
