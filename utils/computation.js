export const QtyDistribution = (plData, priorityBranches, set) => {
  const plValues = Object.values(plData)
  let branchPrioList = Object.values(priorityBranches)

  branchPrioList.sort((a, b) => a.priority - b.priority)

  plValues.forEach(e => {
    if (e.remaining !== 0) {
      const keysWithOrder = Object.keys(e).filter(key => e[key].hasOwnProperty('order'))
      const totalOrderKeys = keysWithOrder.reduce((total, key) => total + e[key].order, 0)

      if (totalOrderKeys !== 0) {
        let remainingValue = Math.round(e.remaining)
        let distributedValue = 0
        let distributedToOne = false

        while (remainingValue > 0) {
          let distributedThisIteration = false
        
          branchPrioList.forEach(branch => {
            const key = branch.code

            if (remainingValue > 0 && e[key]?.order === 1 && e[key]?.dist === 0) {
              distributedValue += 1
              e[key].dist += 1
              remainingValue -= 1
              distributedThisIteration = true
              distributedToOne = true
            }
          })
        
          if (!distributedThisIteration && distributedToOne) {
            branchPrioList.forEach(branch => {
              const key = branch.code
              if (remainingValue > 0 && e[key]?.order > 0) {
                distributedValue += 1
                e[key].dist += 1
                remainingValue -= 1
              }
            })
          }
        
          if (!distributedThisIteration && !distributedToOne) {
            branchPrioList.forEach(branch => {
              const key = branch.code
              if (remainingValue > 0 && e[key]?.order > 0) {
                distributedValue += 1
                e[key].dist += 1
                remainingValue -= 1
              }
            })
          }
        }

        e.remaining = remainingValue
      }
    }
  })

  set(plValues)
}