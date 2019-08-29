const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('📋 remark-lint')
  }

  async dependencies () {
    const cli = { 'remark-cli': `^${await this.npm.latest('remark-cli')}` }
    const preset = {
      'remark-preset-lint-recommended': `^${await this.npm.latest('remark-preset-lint-recommended')}`
    }
    return { ...cli, ...preset }
  }

  async copyTemplates () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.remarkrc'))
  }

  async syncDependencies () {
    const dependencies = await this.dependencies()
    this.package.devDependencies.set(dependencies)
  }
}
