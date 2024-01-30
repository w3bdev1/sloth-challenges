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

while (input >= coinsValue.quarter) {
  input = Number((input - coinsValue.quarter).toPrecision(3))
  coinsRequired.quarter += 1
}

while (input >= coinsValue.dime) {
  input = Number((input - coinsValue.dime).toPrecision(3))
  coinsRequired.dime += 1
}

while (input >= coinsValue.nickel) {
  input = Number((input - coinsValue.nickel).toPrecision(3))
  coinsRequired.nickel += 1
}

while (input >= coinsValue.penny) {
  input = Number((input - coinsValue.penny).toPrecision(3))
  coinsRequired.penny += 1
}

console.log(coinsRequired)

