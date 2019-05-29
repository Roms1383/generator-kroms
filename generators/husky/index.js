const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.log('husky')
  }
  async install () {
    const name = 'husky'
    const dependencies = await this.dependencies(name)
    this.yarnInstall(dependencies, { dev: true })
  }
  writing () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.huskyrc'))
  }
}
