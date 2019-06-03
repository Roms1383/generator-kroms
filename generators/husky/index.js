const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🐶 husky')
  }
  async copyTemplates () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.huskyrc'))
  }
  async syncDependencies () {
    const dependencies = await this.dependencies('husky')
    this.package.devDependencies.set(dependencies)
  }
}
