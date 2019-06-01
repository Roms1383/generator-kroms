const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('📉 codacy')
  }
  async configuring () {
    this.package.scripts.set('coverage', 'cat ./coverage/lcov.info | codacy-coverage')
    const dependencies = await this.dependencies('codacy-coverage')
    this.package.devDependencies.set(dependencies)
  }
}
