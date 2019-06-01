const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🃏 jest')
  }
  async configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('jest.config.js'))
    this.package.scripts.set('test', 'yarn jest')
    const dependencies = await this.dependencies('jest')
    this.package.devDependencies.set(dependencies)
  }
}
