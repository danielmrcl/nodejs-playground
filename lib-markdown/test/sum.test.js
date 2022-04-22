const sum = require('../src/sum')

test('adds 1 + 2 to equal 3', () => {
  sum(1, 2).then(result => {
    expect(result).toBe(3)
  })
})