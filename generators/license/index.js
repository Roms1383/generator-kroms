const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🔖 license')
  }
  configuring () {
    const current = `${(new Date()).getFullYear()}`
    const stored = this.config.get('year')
    const year = stored
    ? stored !== current
      ? `${stored}-${current}`
      : stored
    : current
    this.config.set('year', year)
    this.config.save()
    const { name = '', email = '', website = '' } = this.package.author()
    const license = this.package.license()
    this.composeWith(require.resolve('generator-license'), { name, email, website, license, year })
  }
}
