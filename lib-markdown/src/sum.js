function sum(n1, n2) {
  return new Promise((resolve) => {
    const total = n1 + n2
    resolve(total)
  })
}

module.exports = sum