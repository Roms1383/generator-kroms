const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🃏 jest')
  }
  async install () {
    const name = 'jest'
    const dependencies = await this.dependencies(name)
    this.yarnInstall(dependencies, { dev: true })
  }
  configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('jest.config.js'))
    this.package.scripts.set('test', 'yarn jest')
  }
}
