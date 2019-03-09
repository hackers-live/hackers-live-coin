const fs = require("fs")
const contract = JSON.parse(fs.readFileSync("./build/contracts/HackersLiveCoin.json"))
const bytecode = contract["bytecode"]
console.log(JSON.stringify(bytecode))
