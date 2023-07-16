
# json-deep-copy

[![Build Status](https://github.com/zxdong262/deep-copy/actions/workflows/linux.yml/badge.svg)](https://github.com/zxdong262/deep-copy/actions)
[![codecov](https://codecov.io/gh/zxdong262/deep-copy/branch/master/graph/badge.svg?token=FPmt8WGuJs)](https://codecov.io/gh/zxdong262/deep-copy)

Faster deep-copy for json style object.

## Features

- Simplified lodash.deepClone, maybe 15 times faster when copy many compilcated objects.
- Only support plain objects with number, string, array, boolean

## Use

```bash
npm i json-deep-copy
```

```js
const deepCopy = require('json-deep-copy')
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
