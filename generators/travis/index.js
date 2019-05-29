const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.log('travis')
  }
  writing () {
    const options = {
      npm: this.npm.latest('npm'),
      yarn: this.npm.latest('yarn')
    }
    this.fs.copyTpl(this.templatePath('node'), this.destinationPath('.travis.yml'), options)
  }
}
