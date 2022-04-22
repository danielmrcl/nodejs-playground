const main = require('./main')
const args = process.argv.slice(2).map((arg) => Number(arg))
try {
  main(args)
} catch(error) {
  console.log(error)
}