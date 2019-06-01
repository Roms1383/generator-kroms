const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('📋 eslint')
  }
  async configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.eslintrc'))
    const ignore = this.arrayify(this.config.get('eslintignore')) || ['coverage/', 'node_modules/', 'my-tests/']
    this.fs.write(this.destinationPath('.eslintignore'), `${ignore.join('\n')}\n`)
    const dependencies = await this.dependencies('eslint-config-kroms')
    this.package.devDependencies.set(dependencies)
  }
}
