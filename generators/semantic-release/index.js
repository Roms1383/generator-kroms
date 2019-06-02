const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🚀 semantic-release')
  }
  async configuring () {
    this.fs.copyTpl(this.templatePath('conf'), this.destinationPath('.releaserc'))
    this.package.scripts.set('release', 'yarn semantic-release')
    const dependencies = await this.dependencies('semantic-release-kroms')
    this.package.devDependencies.set(dependencies)
    // scoped packages will be considered as private by default
    // causing failure when publishing with @semantic-release/npm step
    const is = {}
    is.private = this.package.fs.get('private') || false
    is.scoped = this.package.scoped(this.package.name.get())
    if (!is.private && is.scoped) {
      const at = this.destinationPath('.npmrc')
      const existing = this.fs.exists(at)
      ? this.lineify(this.fs.read(at))
      : []
      const modified = !existing.find(line => line.indexOf('access' === 0))
      ? [].concat(existing, 'access = public')
      : ['access = public']
      this.fs.write(at, `${modified.join('\n')}\n`)
    }
  }
}
