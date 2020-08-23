module.exports = decode

var charset = require('./charset')

var lookup = (function () {
  var table = {}, i = 0, l = charset.length
  for (; i < l; i++) (
    table[charset[i]] =
    table[charset[i].toUpperCase()] = i
  )
  table.o = table[0]
  table.i = table[1]
  table.l = table[1]
  table.s = table[5]
  return table
})()

function decode (string) {
  var b = 0
  var skip = 0
  var array = []
  var val

  var l = string.length
  var i = 0
  while (i < l) {
    val = lookup[string[i++]]
    if (!val) return null
    val <<= 3, b |= val >>> skip, skip += 5
    if (skip < 8) continue
    array[array.length] = b, skip -= 8
    b = skip > 0 ? ((val << (5 - skip)) & 255) : 0
  }

  if (skip < 0) array[array.length] = charset[bits >> 3]
  return array
}
