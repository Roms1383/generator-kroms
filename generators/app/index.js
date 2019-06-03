require('dotenv').config()
const yosay = require('yosay')
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
  async initializing () {
    this.log(yosay('welcome to kroms scaffolding utility !'))
    this._validate()
    const tested = await this.inspect.files('test.js')
    // license
    this.composeWith(require.resolve('../license'), { tested })
    // readme
    this.composeWith(require.resolve('../readme'), { tested })
    // gitignore
    this.composeWith(require.resolve('../gitignore'), { tested })
    // node version manager
    this.composeWith(require.resolve('../nvm'), { tested })
    // dependency manager
    this.composeWith(require.resolve('../renovate'), { tested })
    // files lint
    this.composeWith(require.resolve('../lint'), { tested })
    // code tests
    this.composeWith(require.resolve('../jest'), { tested })
    // code coverage
    this.composeWith(require.resolve('../codacy'), { tested })
    // automated actions on git staged files
    this.composeWith(require.resolve('../lint-staged'), { tested })
    // commit message compliancy
    this.composeWith(require.resolve('../commitlint'), { tested })
    // CI/CD
    this.composeWith(require.resolve('../travis'), { tested })
    // semantic release
    this.composeWith(require.resolve('../semantic-release'), { tested })
    // automated git hooks
    this.composeWith(require.resolve('../husky'), { tested })
  }
  install () {
    this.installDependencies({ yarn: true, npm: false, bower: false })
  }
}
