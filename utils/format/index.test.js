const chalk = require('chalk')
const { mandatory, recommended } = require('.')
describe('format', () => {
  describe('mandatory, recommended', () => {
    it('cause', () => {
      expect(mandatory('cause')).toEqual('🚫 missing cause')
      expect(recommended('cause')).toEqual('⚠️  missing cause')
    })
    it('causes', () => {
      expect(mandatory(['cause', 'cause'])).toEqual('🚫 missing cause, cause')
      expect(recommended(['cause', 'cause'])).toEqual('⚠️  missing cause, cause')
    })
    it('causes and suggestion', () => {
      expect(mandatory(['cause', 'cause'], 'suggestion')).toEqual('🚫 missing cause, cause : suggestion')
      expect(recommended(['cause', 'cause'], 'suggestion')).toEqual('⚠️  missing cause, cause : suggestion')
    })
    it('causes, suggestion and solution', () => {
      expect(mandatory(['cause', 'cause'], 'suggestion', 'solution')).toEqual(`🚫 missing cause, cause : suggestion\n${chalk.cyan('solution')}`)
      expect(recommended(['cause', 'cause'], 'suggestion', 'solution')).toEqual(`⚠️  missing cause, cause : suggestion\n${chalk.cyan('solution')}`)
    })
    it('causes, suggestion and solutions', () => {
      expect(mandatory(['cause', 'cause'], 'suggestion', ['solution', 'solution'])).toEqual(`🚫 missing cause, cause : suggestion\n${chalk.cyan('solution')}\n${chalk.cyan('solution')}`)
      expect(recommended(['cause', 'cause'], 'suggestion', ['solution', 'solution'])).toEqual(`⚠️  missing cause, cause : suggestion\n${chalk.cyan('solution')}\n${chalk.cyan('solution')}`)
    })
  })
})
