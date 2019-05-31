const request = require('request-promise-native')
const Generator = require('../../utils/generator')
module.exports = class extends Generator {
  initializing () {
    this.box('🙈 gitignore')
  }
  async configuring () {
    const at = this.destinationPath('.gitignore')
    const extensions = []
    if (await this.inspect.files('js')) extensions.push('node')
    if (await this.inspect.file('serverless.yml')) extensions.push('serverless')
    if (await this.inspect.files('tf')) extensions.push('terraform')
    const exclusions = await request({ method: 'GET', url: `https://www.gitignore.io/api/${extensions.join(',')}` })
    .then(this.lineify)
    const existing = this.lineify(this.fs.read(at))
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
