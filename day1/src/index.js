try {
  const input = parseInput()
  console.log(`Coins required for $${input}:\n`, dollarToCoins(input))
} catch (error) {
  console.log(error.message)
}

function parseInput() {
  if (process.argv.length < 3) throw new Error("Provide dollar value as first argument")

  const input = Number(process.argv[2])
  if (isNaN(input)) throw new Error("Provide a valid numeric amount")
  if (input < 0) throw new Error("Input cannot be negative")

  return input
}

function dollarToCoins(dollar) {
  const coinsValue = {
    quarter: 0.25,
    dime: 0.10,
    nickel: 0.05,
    penny: 0.01,
  }

  const coinsRequired = {
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  }

  let remainingInput = dollar 
  for (const [coin, coinValue] of Object.entries(coinsValue)) {
    while (remainingInput >= coinValue) {
      remainingInput = Number((remainingInput - coinsValue[coin]).toPrecision(3))
      coinsRequired[coin] += 1
    }
  }

  return coinsRequired
}

