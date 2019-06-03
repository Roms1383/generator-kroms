const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🃏 jest')
  }
  async copyTemplates () {
    if (this.tested) this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('jest.config.js'))
    else if (this.fs.exists(this.destinationPath('jest.config.js'))) { this.fs.delete(this.destinationPath('jest.config.js')) }
  }
  async syncDependencies () {
    const dependencies = await this.dependencies('jest')
    if (this.tested) this.package.devDependencies.set(dependencies)
    else this.package.devDependencies.unset(dependencies)
  }
  async syncScripts () {
    // no need to launch jest if there's no unit-test
    const command = this.tested ? 'yarn jest' : `echo 'you should add unit-tests' && exit 0`
    this.package.scripts.set('test', command)
  }
}
