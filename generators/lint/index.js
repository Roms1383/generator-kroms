const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    // code lint
    this.composeWith(require.resolve('../eslint'))
    // markdown lint
    this.composeWith(require.resolve('../remark-lint'))
  }

  async copyTemplates () {
    this.package.scripts.set('lint', 'yarn eslint \'**/*.js\' && yarn remark .')
  }
}
