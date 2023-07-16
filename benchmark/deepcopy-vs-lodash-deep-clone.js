const { cloneDeep } = require('lodash')
const deepCopy = require('../dist/deep-copy.js')
const jcopy = (src) => {
  return JSON.parse(JSON.stringify(src))
}
const { log } = console
let ed = null
const eg = {
  a: 'a',
  b: 7879,
  g: false,
  h: [
    { g: 0, l: true, k: { l: 56 } },
    { g: 0, l: true, fg: 'dfg', k: { l: 56 } },
    { g: 0, l: true, k: { l: 56 } }
  ],
  jk: {
    ager: 56,
    tank: 'sj',
    what: {
      sdf: {
        sdf: 'asdasd',
        ll: ['safd', { sdfs: 'dfsf' }]
      }
    }
  }
}

const len = 100000
const t1 = new Date().getTime()
for (let i = 0; i < len; i++) {
  ed = cloneDeep(eg)
}
const t2 = new Date().getTime()
log(t2 - t1, len, 'lodash.cloneDeep')

const t3 = new Date().getTime()
for (let j = 0; j < len; j++) {
  ed = deepCopy(eg)
}
const t4 = new Date().getTime()
log(t4 - t3, len, 'deepCopy')

const t5 = new Date().getTime()
for (let jj = 0; jj < len; jj++) {
  ed = jcopy(eg)
}
const t6 = new Date().getTime()
log(t6 - t5, len, 'json copy')
log(!!ed)
