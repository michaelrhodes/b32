var utf8 = require('utf8')
var encode = require('./encode')
var decode = require('./decode')

var encoded = encode(utf8.bytes('b32'))
var decoded = utf8.string(decode(encoded))

console.assert(encoded === 'c8tk4')
console.assert(decoded === 'b32')
