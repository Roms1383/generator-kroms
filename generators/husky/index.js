const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🐶 husky')
  }
  async configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.huskyrc'))
    const dependencies = await this.dependencies('husky')
    this.package.devDependencies.set(dependencies)
  }
}
