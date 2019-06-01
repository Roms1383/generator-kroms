const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🚀 semantic-release')
  }
  async configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.releaserc'))
    this.package.scripts.set('release', 'yarn semantic-release')
    const dependencies = await this.dependencies('semantic-release-kroms')
    this.package.devDependencies.set(dependencies)
  }
}
