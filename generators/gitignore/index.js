const request = require('request-promise-native')
const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.introduce('🙈 gitignore')
  }

  async copyTemplates () {
    const at = this.destinationPath('.gitignore')
    const extensions = []
    this.task('inspecting file system...')
    if (await this.inspect.files('js')) {
      this.info('*.js files found in project')
      extensions.push('node')
    }
    if (await this.inspect.file('serverless.yml')) {
      this.info('serverless.yml found in project')
      extensions.push('serverless')
    }
    if (await this.inspect.files('tf')) {
      this.info('*.tf files found in project')
      extensions.push('terraform')
    }
    this.info(`retrieving ignored files from gitignore.io for ${extensions.join(',')}`)
    const exclusions = await request({
      method: 'GET',
      url: `https://www.gitignore.io/api/${extensions.join(',')}`
    }).then(this.lineify)
    const existing = this.fs.exists(at) ? this.lineify(this.fs.read(at)) : []
    const custom = this.arrayify(this.config.get('gitignore')) || ['my-tests/']
    const merged = [...exclusions, ...existing, ...custom]
    .reduce((merged, line) => {
      if (!merged.includes(line)) merged.push(line)
      return merged
    }, [])
    .sort()
    .join('\n')
    this.fs.write(at, `${merged}\n`)
  }
}
