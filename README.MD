
# json-deep-copy

[![Build Status](https://travis-ci.org/zxdong262/deep-copy.svg?branch=master)](https://travis-ci.org/zxdong262/deep-copy)
[![Coverage Status](https://coveralls.io/repos/github/zxdong262/deep-copy/badge.svg?branch=master)](https://coveralls.io/github/zxdong262/deep-copy?branch=master)

Faster deep-copy for json style object.

## Features

- Simplified lodash.deepClone, maybe 15 times faster when copy many compilcated objects.
- Only support plain objects with number, string, array, boolean

## Use

```bash
npm i json-deep-copy
```

```js
const deepCopy = require('json-deep-copy').default
// or
import deepCopy from 'json-deep-copy'

let deepCopyedObj = deepCopy(someObj)
```

## Dev || test || benchmark

```bash
git clone git@github.com:zxdong262/deep-copy.git
cd deep-copy
npm i

# test
npm run test

# benchmark
npm run benchmark
```

## LICENSE

MIT
