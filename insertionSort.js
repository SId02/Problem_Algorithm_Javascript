function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let val = items[i]
    for (var j = i - 1; j > -1 && items[j] > val; j--) {
      items[j + 1] = items[j]
    }
    items[j + 1] = val;
  }
  return numsort;
}
const numsort = [56, 10, 53, 80, 77, 31, 04, 98, 25]
console.log(insertionSort(numsort));