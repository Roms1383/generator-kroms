const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('📉 codacy')
  }
  async configuring () {
    if (this.tested) this.package.scripts.set('coverage', 'cat ./coverage/lcov.info | codacy-coverage')
    else this.package.scripts.unset('coverage')
    const dependencies = await this.dependencies('codacy-coverage')
    if (this.tested) this.package.devDependencies.set(dependencies)
    else this.package.devDependencies.unset(dependencies)
  }
}
