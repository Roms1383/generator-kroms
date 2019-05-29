const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.log('eslint')
    this.log('remark-lint')
  }
  default () {
    // code lint
    this.composeWith(require.resolve('../eslint'))
    // markdown lint
    this.composeWith(require.resolve('../remark-lint'))
  }
  writing () {
    this.package.scripts.set('lint', `yarn eslint '*.js' && yarn remark .`)
  }
}
