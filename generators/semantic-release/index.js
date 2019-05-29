const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.log('semantic-release')
  }
  async install () {
    const name = 'semantic-release-kroms'
    const dependencies = await this.dependencies(name)
    this.yarnInstall(dependencies, { dev: true })
  }
  writing () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.releaserc'))
    this.package.scripts.set('release', 'yarn semantic-release')
  }
}
