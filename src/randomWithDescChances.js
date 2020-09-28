function countLots(x) {
  let count = 0

  for (let i = x; i > 0; --i) {
    count += i
  }

  return count
}

function randomWithDescChances(maxNum) {
  const howManyChances = countLots(maxNum)

  for (let i = maxNum; i > 0; --i) {
    if (Math.random() <= i / howManyChances) {
      return i
    }
  }

  return 0
}

module.exports = randomWithDescChances
