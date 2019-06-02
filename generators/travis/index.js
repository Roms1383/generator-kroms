const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('👷 travis')
  }
  configuring () {
    const options = {
      npm: this.npm.latest('npm'),
      yarn: this.npm.latest('yarn'),
      tests: this.tested
    }
    this.fs.copyTpl(this.templatePath('node'), this.destinationPath('.travis.yml'), options)
  }
}
