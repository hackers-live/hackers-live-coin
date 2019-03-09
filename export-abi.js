const fs = require("fs")
const contract = JSON.parse(fs.readFileSync("./build/contracts/HackersLiveCoin.json"))
const abi = contract["abi"]
console.log(JSON.stringify(abi))
