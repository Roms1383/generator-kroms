const PATTERN = /https:\/\/github\.com\/([a-z-A-Z0-9]+)\/([a-z-A-Z0-9]+)/i
module.exports = url => {
  if (!url || url.length === 0) return undefined
  const matched = url.match(PATTERN)
  if (!matched) return matched
  const [, owner, repository] = matched
  return { owner, repository }
}
