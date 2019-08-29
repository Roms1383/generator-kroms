const chalk = require('chalk')
const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🚀 semantic-release')
  }

  async configuring () {
    const version = '0.0.0-semantically-released'
    if (this.released) this.package.version.set(version)
    else if (this.package.version.get() === version) this.log(`⚠️  project explicitly not released but version in package.json is ${chalk.red('0.0.0-semantically-released')}`)
    await super.configuring()
  }

  async copyTemplates () {
    if (this.released) this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.releaserc'))
    else this.fs.delete(this.destinationPath('.releaserc'))
    // scoped packages will be considered as private by default
    // causing failure when publishing with @semantic-release/npm step
    const is = {}
    is.private = this.package.fs.get('private') || false
    is.scoped = this.package.scoped(this.package.name.get())
    if (!is.private && is.scoped) {
      const at = this.destinationPath('.npmrc')
      const existing = this.fs.exists(at) ? this.lineify(this.fs.read(at)) : []
      const modified = !existing.find(line => line.indexOf('access' === 0))
      ? [].concat(existing, 'access = public')
      : ['access = public']
      this.fs.write(at, `${modified.join('\n')}\n`)
    }
  }

  async syncDependencies () {
    const dependencies = await this.dependencies('semantic-release-kroms')
    if (this.released) this.package.devDependencies.set(dependencies)
    else this.package.devDependencies.unset(dependencies)
  }

  async syncScripts () {
    const command = 'yarn semantic-release'
    if (this.released) this.package.scripts.set('release', command)
    else if (this.package.scripts.get('release') === command) this.package.scripts.unset('release')
  }
}
