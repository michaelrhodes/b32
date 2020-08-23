# b32
non-rfc3548 base32

[![ci](https://travis-ci.org/michaelrhodes/b32.svg?branch=master)](https://travis-ci.org/michaelrhodes/b32)

## install
```sh
npm install https://pkg.mkr.sx/b32/1.0.1.tgz
```

## use
```js
var b32 = require('b32')
var utf8 = require('utf8')

b32.encode(utf8.bytes('b32'))
> c8tk4

utf8.string(b32.decode('c8tk4'))
> 'b32'
```

## obey
Copyright 2011 [Isaac Wolkerstorfer](https://github.com/agnoster/base32-js)<br>
Copyright 2020 Michael Rhodes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
