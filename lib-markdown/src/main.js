const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const sum = require('./sum')

function checkArguments(args) {
  if (args.length !== 2) {
    throw new Error("2 valores são necessários!")
  }
  else if (Number.isNaN(args[0]) || Number.isNaN(args[1])) {
    throw new Error("Apenas valores numéricos são aceitos.")
  }
}

function main(args) {
  checkArguments(args)
  sum(args[0], args[1])
    .then(result => console.log(result))
  fetch("https://google.com").then(result => console.log(result.status))
}

module.exports = main
