require('dotenv').config()
const yosay = require('yosay')
const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  _validate () {
    const none = !this.package.fs.exists()
    if (none) this.fail('no package.json could be found', 'please initialize your repository first', 'yarn init -y')
    const mandatory = ['name', 'author', 'license', 'repository']
    .reduce((mandatory, field) => {
      if (!this.package[field].get()) mandatory.push(field)
      return mandatory
    }, [])
    if (mandatory.length > 0) this.fail(mandatory, 'please fill mandatory field(s) in package.json')
    const recommended = ['main', 'files', 'description', 'keywords']
    .reduce((recommended, field) => {
      if (!this.package[field].get()) recommended.push(field)
      return recommended
    }, [])
    if (recommended.length > 0) this.warn(recommended, 'please consider filling recommended field(s) in package.json')
  }
  initializing () {
    this.log(yosay('welcome to kroms scaffolding utility !'))
    this._validate()
    // license
    this.composeWith(require.resolve('../license'))
    // readme
    this.composeWith(require.resolve('../readme'))
    // gitignore
    this.composeWith(require.resolve('../gitignore'))
    // node version manager
    this.composeWith(require.resolve('../nvm'))
    // dependency manager
    this.composeWith(require.resolve('../renovate'))
    // files lint
    this.composeWith(require.resolve('../lint'))
    // code tests
    this.composeWith(require.resolve('../jest'))
    // code coverage
    this.composeWith(require.resolve('../codacy'))
    // automated actions on git staged files
    this.composeWith(require.resolve('../lint-staged'))
    // commit message compliancy
    this.composeWith(require.resolve('../commitlint'))
    // CI/CD
    this.composeWith(require.resolve('../travis'))
    // semantic release
    this.composeWith(require.resolve('../semantic-release'))
    // automated git hooks
    this.composeWith(require.resolve('../husky'))
  }
  install () {
    this.installDependencies({ yarn: true, npm: false, bower: false })
  }
}
