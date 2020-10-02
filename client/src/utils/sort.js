const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      console.log('key=>',key)
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
}

export const AZ = arr => arr.sort(compareKey('productName'))
export const ZA = arr => {
  console.log(arr)
  arr.sort(compareKey('productName')).reverse()
}
export const lowestFirst = arr => arr.sort((a, b) => parseInt(a.price) - parseInt(b.price))
  console.log(lowestFirst)

export const highestFirst = arr => arr.sort((a, b) =>
  parseInt(b.price) - parseInt(a.price))
