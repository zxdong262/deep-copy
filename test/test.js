const chai = require('chai'),
  expect = chai.expect,
  pkg = require('../package.json'),
  should = chai.should()

const deepCopy = require('..')

describe(pkg.name, function () {

  it('null', function () {
    let a = null
    let b = deepCopy(a)
    expect(b).to.equal(null)
    a = 0
    expect(b).to.equal(null)
  })

  it('undefined', function () {
    let a
    let b = deepCopy(a)
    expect(typeof b).to.equal('undefined')
    a = 0
    expect(typeof b).to.equal('undefined')
  })

  it('array', function () {
    let a = [
      {x: 1, b: 'ert0'},
      {x: 2, b: 'ert1'},
      {x: 3, b: 'ert2'}
    ]
    let b = deepCopy(a)
    expect(b[2].x).to.equal(3)
    a[2].x = 55
    expect(b[2].x).to.equal(3)
  })

  it('plain obj', function () {
    let a = {
      x: 1,
      b: 'ert0',
      c: {
        gg: 89,
        dfg: [{g: 0}]
      }
    }
    let b = deepCopy(a)
    expect(b.c.dfg[0].g).to.equal(0)
    a.c.dfg = 67
    expect(b.c.dfg[0].g).to.equal(0)
  })

})