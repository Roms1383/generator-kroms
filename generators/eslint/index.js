const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.log('eslint')
  }
  async install () {
    const name = 'eslint-config-kroms'
    const dependencies = await this.dependencies(name)
    this.yarnInstall(dependencies, { dev: true })
  }
  writing () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.eslintrc'))
  }
}
