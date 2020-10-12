const countLots = new Array(5)
  .fill()
  .map((el, i) => i + 1)
  .reduce((x, y) => x + y)

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
