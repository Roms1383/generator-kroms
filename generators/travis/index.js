const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('👷 travis')
  }
  async copyTemplates () {
    const options = {
      npm: this.npm.latest('npm'),
      yarn: this.npm.latest('yarn'),
      tests: this.tested,
      coverage: this.covered
    }
    this.fs.copyTpl(this.templatePath('node'), this.destinationPath('.travis.yml'), options)
  }
}
