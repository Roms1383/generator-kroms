const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('📉 codacy')
  }
  async install () {
    const name = 'codacy-coverage'
    const dependencies = await this.dependencies(name)
    this.yarnInstall(dependencies, { dev: true })
  }
  configuring () {
    this.package.scripts.set('coverage', 'cat ./coverage/lcov.info | codacy-coverage')
  }
}
