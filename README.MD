# json-deep-copy
[![Build Status](https://travis-ci.org/zxdong262/deep-copy.svg?branch=master)](https://travis-ci.org/zxdong262/deep-copy)
faster deep-copy for json style data

## feature
- simplified lodash.deepClone, maybe 15 times faster when copy many compilcated objects
- only support plain objects with number, srting, array, boolean

## use
```bash
npm i json-deep-copy
```

```js
let deepCopy = require('json-deep-copy')
// or
import deepCopy from 'json-deep-copy'

let deepCopyedObj = deepCopy(someObj)
```

## dev || test || benchmark
```bash
git clone git@github.com:zxdong262/deep-copy.git
cd deep-copy
npm i
npm run test
npm run benchmark
```
## LICENSE
MIT
