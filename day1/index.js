const input = 4.99

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

console.log(`Coins required for $${input} ->`, dollarToCoins(input))

