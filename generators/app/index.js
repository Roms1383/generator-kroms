require('dotenv').config()
const fs = require('fs')
const R = require('ramda')
const chalk = require('chalk')
const yosay = require('yosay')
const semver = require('semver')
const lockfile = require('@yarnpkg/lockfile')
const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  _validate () {
    const none = !this.package.fs.exists()
    if (none) this.fail('no package.json could be found', 'please initialize your repository first', 'yarn init -y')
    const missing = array => array
    .reduce((searched, field) => {
      if (!this.package[field].get()) searched.push(field)
      return searched
    }, [])
    const mandatory = missing(['name', 'author', 'license', 'repository'])
    if (mandatory.length > 0) this.fail(mandatory, 'please fill mandatory field(s) in package.json')
    const recommended = missing(['main', 'files', 'description', 'keywords'])
    if (recommended.length > 0) this.warn(recommended, 'please consider filling recommended field(s) in package.json')
  }
  async _version () {
    const at = {}
    const file = {}
    const folder = {}
    const lens = {}
    const itself = this.package.fs.get('name') === 'generator-kroms'
    lens.dependency = ['dependencies', 'generator-kroms']
    lens.devDependency = ['devDependencies', 'generator-kroms']
    lens.peerDependency = ['peerDependencies', 'generator-kroms']
    lens.symlinks = ['linkedModules']
    at.generator = this.destinationPath('node_modules', 'generator-kroms')
    at.pkg = this.destinationPath('node_modules', 'generator-kroms', 'package.json')
    at.lock = this.destinationPath('yarn.lock')
    at.integrity = this.destinationPath('node_modules', '.yarn-integrity')
    file.pkg = this.fs.exists(at.pkg) && this.fs.readJSON(at.pkg)
    file.lock = this.fs.exists(at.lock) && lockfile.parse(this.fs.read(at.lock))
    file.integrity = this.fs.exists(at.integrity) && this.fs.readJSON(at.integrity)
    folder.generator = fs.existsSync(at.generator)
    // generator is used with symlink
    const symlinked = {}
    symlinked.inside = itself
    && file.integrity
    && R.pathOr([], lens.symlinks, file.integrity)
    .find(dependency => dependency === 'generator-kroms') !== undefined
    symlinked.outside = !itself
    && folder.generator
    && fs.lstatSync(at.generator).isSymbolicLink()
    if (symlinked.inside || symlinked.outside) return 'symlinked'
    // generator has already been specified in project's package.json
    const wanted = !itself
    && (this.package.fs.get(lens.devDependency)
        || this.package.fs.get(lens.peerDependency)
        || this.package.fs.get(lens.dependency))
    if (!wanted) return 'missing in package.json'
    // generator is specified in project's yarn.lock and folder exists in project's node_modules
    const installed = !itself
    && folder.generator
    && file.lock
    && R.pathOr(false, ['object', `generator-kroms@${wanted}`, 'version'], file.lock)
    if (installed) return installed
    // generator is specified but no first install yet
    const versions = this.npm.list('generator-kroms')
    const found = versions
    .reduce((found, version) => semver.satisfies(version, wanted) ? version : found, undefined)
    if (found) return found
    // there might be missing files/folders
    return 'unknown'
  }
  async initializing () {
    this.log(yosay(`welcome to kroms scaffolding utility !\n${chalk.grey(`(${await this._version()})`)}`))
    this.box('INITIALIZING')
    // validate package.json fields
    this.task('validating package.json fields...')
    this._validate()
    // retrieve options
    this.task(`retrieving options...`)
    const tested = await this.inspect.files('test.js')
    const covered = R.isNil(this.config.get('coverage')) || this.config.get('coverage')
    const options = { tested, covered }
    this.info('found *.test.js files in project')
    this.info(`this project ${covered ? '' : "doesn't "}use coverage`)
    // compose generators
    this.task('this generator is composed of these utilities')
    // license
    this.composeWith(require.resolve('../license'), options)
    // readme
    this.composeWith(require.resolve('../readme'), options)
    // gitignore
    this.composeWith(require.resolve('../gitignore'), options)
    // node version manager
    this.composeWith(require.resolve('../nvm'), options)
    // dependency manager
    this.composeWith(require.resolve('../renovate'), options)
    // files lint
    this.composeWith(require.resolve('../lint'), options)
    // code tests
    this.composeWith(require.resolve('../jest'), options)
    // code coverage
    this.composeWith(require.resolve('../codacy'), options)
    // automated actions on git staged files
    this.composeWith(require.resolve('../lint-staged'), options)
    // commit message compliancy
    this.composeWith(require.resolve('../commitlint'), options)
    // CI/CD
    this.composeWith(require.resolve('../travis'), options)
    // semantic release
    this.composeWith(require.resolve('../semantic-release'), options)
    // automated git hooks
    this.composeWith(require.resolve('../husky'), options)
  }
  configuring () {
    this.box('CONFIGURING')
    super.configuring()
  }
  install () {
    this.box('INSTALL')
    this.installDependencies({ yarn: true, npm: false, bower: false })
  }
  end () {
    this.step('finished !')
    this.log(`⚠️  don't forget to run ${chalk.cyan('nvm use')} at least once to avoid inconsistencies`)
  }
}
