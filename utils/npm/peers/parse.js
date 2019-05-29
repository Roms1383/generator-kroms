const REMOVE = /[\s{}']/gm
const REPLACE = /[:]/gm
module.exports = (output, versioned = true) => {
  if (!output) return []
  const peers = output
  .replace(REMOVE, '')
  .replace(REPLACE, '@')
  .split(',')
  return versioned
  ? peers
  : peers.map(peer => peer.split('@')[0])
}
