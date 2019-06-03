const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🔖 license')
    const current = `${new Date().getFullYear()}`
    const stored = this.config.get('year')
    const year = stored ? (stored !== current ? `${stored}-${current}` : stored) : current
    this.config.set('year', year)
    this.config.save()
    const { name = '', email = '', website = '' } = this.package.author.get() || {}
    const license = this.package.license.get()
    this.composeWith(require.resolve('generator-license'), { name, email, website, license, year })
  }
}
