const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🐶 husky')
  }
  async install () {
    const name = 'husky'
    const dependencies = await this.dependencies(name)
    this.yarnInstall(dependencies, { dev: true })
  }
  configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.huskyrc'))
  }
}
