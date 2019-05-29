const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.log('commitlint')
  }
  async install () {
    const name = 'commitlint-config-kroms'
    const dependencies = await this.dependencies(name)
    this.yarnInstall(dependencies, { dev: true })
  }
  writing () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.commitlintrc.yml'))
  }
}
