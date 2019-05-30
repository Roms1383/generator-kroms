const Generator = require('../../utils/generator')
const chalk = require('chalk')
const yosay = require('yosay')
// const { author } = require('../../utils/package')
module.exports = class extends Generator {
  initializing () {
    this.log(yosay('welcome to kroms scaffolding utility !'))
    const none = !this.package.fs.exists()
    if (none) {
      this.log(`⚠️  no package.json could be found, please initialize your repository first\ne.g. ${chalk.cyan('yarn init -y')}`)
      process.exit(0)
    }
    // license
    this.composeWith(require.resolve('../license'))
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
}
