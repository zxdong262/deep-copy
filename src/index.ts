/**
 * simplified lodash.deepClone, maybe 15 times faster when copying many complex objects
 * @see benchmark/deepcopy-vs-lodash-deep-clone.js
 * only supports plain objects with number, string, array, boolean, null
 * from http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript
 * @param {object | array} src
 * @return {object | array}
 */

interface Obj {
  [key: string]: any
}

export function deepCopy (src: any): any {
  if (src === null || typeof (src) !== 'object') {
    return src
  }
  if (Array.isArray(src)) {
    const ret = new Array(src.length)
    let i = ret.length
    while (i--) {
      ret[i] = deepCopy(src[i])
    }
    return ret
  }
  const dest: Obj = {}
  for (const key in src) {
    dest[key] = deepCopy(src[key])
  }
  return dest
}

export default deepCopy
