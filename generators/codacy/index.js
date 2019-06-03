const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('📉 codacy')
  }
  async syncScripts () {
    if (this.tested && this.covered) { this.package.scripts.set('coverage', 'cat ./coverage/lcov.info | codacy-coverage') } else this.package.scripts.unset('coverage')
  }
  async syncDependencies () {
    const dependencies = await this.dependencies('codacy-coverage')
    if (this.tested && this.covered) this.package.devDependencies.set(dependencies)
    else this.package.devDependencies.unset(dependencies)
  }
}
