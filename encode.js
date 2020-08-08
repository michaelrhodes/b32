module.exports = encode

var charset = require('./charset')

function encode (array) {
  var string = ''
  var bits = 0
  var skip = 0
  var b

  var i = 0
  var l = array.length
  while (i < l) {
    b = array[i]
    if (skip < 0) bits |= (b >> (-skip))
    else bits = (b << skip) & 248
    if (skip > 3) skip -= 8, i += 1
    else if (skip < 4) string += charset[bits >> 3], skip += 5
  }

  return string + (skip < 0 ? charset[bits >> 3] : '')
}
