const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('📉 codacy')
  }
  async syncScripts () {
    const command = 'cat ./coverage/lcov.info | codacy-coverage'
    if (this.tested && this.covered) this.package.scripts.set('coverage', command)
    else if ((!this.tested || !this.covered) && this.package.scripts.get('coverage') === command) this.package.scripts.unset('coverage')
  }
  async syncDependencies () {
    const dependencies = await this.dependencies('codacy-coverage')
    if (this.tested && this.covered) this.package.devDependencies.set(dependencies)
    else this.package.devDependencies.unset(dependencies)
  }
}
