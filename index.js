/**
 * simplified lodash.deepClone, maybe 15 times faster when copy many compilcated objects
 * @see benchmark/deepcopy-vs-lodash-deep-clone.js
 * only support plain objects with number, srting, array, boolean
 * from http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript
 * @param {object | array} src
 * @return {object | array}
 */

module.exports = exports.default = function deepCopy(src) {
  if(src === null || typeof(src) !== 'object'){
    return src
  }
  if (Array.isArray(src)) {
    var ret = new Array(src.length)
    var i = ret.length
    while (i--) {
      ret[i] = deepCopy(src[i])
    }
    return ret
  }
  var dest = {}
  for (var key in src) {
    dest[key] = deepCopy(src[key])
  }
  return dest
}
