const R = require('ramda')
const WEBSITE = /(?<=\()(.+)(?=\))/
const EMAIL = /(?<=<)(.+)(?=>)/
module.exports = string => {
  const website = R.path(['0'], string.match(WEBSITE))
  const email = R.path(['0'], string.match(EMAIL))
  const name = string
  .replace(website ? `(${website})` : undefined, '')
  .replace(email ? `<${email}>` : undefined, '')
  .trim()
  return { name: name.length > 0 ? name : undefined, email, website }
}
