const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('📋 remark-lint')
  }
  async configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.remarkrc'))
    const cli = { 'remark-cli': `^${await this.npm.latest('remark-cli')}` }
    const preset = { 'remark-preset-lint-recommended': `^${await this.npm.latest('remark-preset-lint-recommended')}` }
    this.package.devDependencies.set({ ...cli, ...preset })
  }
}
