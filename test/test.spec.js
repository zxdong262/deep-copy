/* eslint-env jest */

import deepCopy from '../src'

const pkg = require('../package.json')

jest.setTimeout(64000)

describe(pkg.name, function () {
  it('null', function () {
    let a = null
    const b = deepCopy(a)
    expect(b).toBe(null)
    a = 0
    expect(b).toBe(null)
  })

  it('undefined', function () {
    const b = deepCopy()
    expect(typeof b).toBe('undefined')
    expect(typeof b).toBe('undefined')
  })

  it('array', function () {
    const a = [
      { x: 1, b: 'ert0' },
      { x: 2, b: 'ert1' },
      { x: 3, b: 'ert2' }
    ]
    const b = deepCopy(a)
    expect(b[2].x).toBe(3)
    a[2].x = 55
    expect(b[2].x).toBe(3)
  })

  it('plain obj', function () {
    const a = {
      x: 1,
      b: 'ert0',
      c: {
        gg: 89,
        dfg: [{ g: 0 }]
      }
    }
    const b = deepCopy(a)
    expect(b.c.dfg[0].g).toBe(0)
    a.c.dfg = 67
    expect(b.c.dfg[0].g).toBe(0)
  })

  it('string', function () {
    const a = 'aa'
    const b = deepCopy(a)
    expect(b).toBe('aa')
  })

  it('number', function () {
    const a = 7877
    const b = deepCopy(a)
    expect(b).toBe(7877)
  })
})
