module.exports = (content, delimiter = '*****') => {
  if (!content) return undefined
  const starts = content.indexOf(delimiter)
  const ends = content.lastIndexOf(delimiter)
  const parseable = starts !== ends
  && starts !== -1
  && ends !== -1
  if (!parseable) return undefined
  const length = {}
  length.delimiter = delimiter.length
  length.carriage = '\n'.length
  return content.substring(
    starts + length.delimiter + (length.carriage * 2),
    ends - (length.carriage * 2))
}
