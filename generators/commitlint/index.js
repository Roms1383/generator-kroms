const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🔎 commitlint')
  }
  async configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.commitlintrc.yml'))
    const dependencies = await this.dependencies('commitlint-config-kroms')
    this.package.devDependencies.set(dependencies)
  }
}
