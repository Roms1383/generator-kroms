const chalk = require('chalk')
const boxen = require('boxen')
const arrayify = variable => Array.isArray(variable) ? variable : [variable]
const box = (message,
  options = {
    margin: 0,
    padding: 0,
    borderStyle: 'round',
    borderColor: 'yellow',
    align: 'center' }) => boxen(message, options)
const multiline = (icon, title, causes, suggestion = undefined, solutions = undefined) => {
  const left = [icon, title, arrayify(causes).join(', ')].join(' ')
  const top = suggestion
  ? [left, suggestion].join(' : ')
  : left
  return solutions
  ? [top, ...arrayify(solutions).map(solution => chalk.cyan(solution))].join('\n')
  : top
}
const warn = (title, causes, suggestion = undefined, solutions = undefined) => multiline('⚠️ ', title, causes, suggestion, solutions)
const prevent = (title, causes, suggestion = undefined, solutions = undefined) => multiline('🚫', title, causes, suggestion, solutions)
const recommended = (causes, suggestion = undefined, solutions = undefined) => warn('missing', causes, suggestion, solutions)
const mandatory = (causes, suggestion = undefined, solutions = undefined) => prevent('missing', causes, suggestion, solutions)
module.exports = { box, warn, prevent, recommended, mandatory }
