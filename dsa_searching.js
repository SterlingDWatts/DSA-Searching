const dsaSearching = {
  main() {
    const arr = [3, 5, 6, 11, 12, 14, 15, 17, 18];
    this.binarySearch(arr, 8);
    this.binarySearch(arr, 16);
  },
  binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
  
    if (start > end) {
      return -1;
    }
  
    const index = Math.floor((start + end) / 2);
    const item = array[index];
  
    console.log(start, end);
    if (item == value) {
      return index;
    } else if (item < value) {
      return this.binarySearch(array, value, index + 1, end);
    } else if (item > value) {
      return this.binarySearch(array, value, start, index - 1);
    }
  }
}

module.exports = dsaSearching;
