let input = 4.99

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

for (const [coin, coinValue] of Object.entries(coinsValue)) {
  while (input >= coinValue) {
    input = Number((input - coinsValue[coin]).toPrecision(3))
    coinsRequired[coin] += 1
  }
}

console.log(coinsRequired)

