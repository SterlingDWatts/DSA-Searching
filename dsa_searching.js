const BinarySearchTree = require("./binarySearchTree");

/*
4. Searching in a BST
  1) postorder traversal:
    12 9 15 27 25 79 90 91 89 35
  2) pre-order traversal:
    8 6 5 7 10 9 11

6. Find the next commanding officer
  Create a linked list of the tree using a breadth first search
  When somebody dies, remove them from the list and rebuild the tree
*/

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
  },
  deweySearch(bookArray, deweyNum, book, index) {
    var index = index === undefined ? this.binarySearch(bookArray, deweyNum) : index

    if (book == bookArray[index]) {
      return bookArray[index]
    } else if (book < bookArray[index]) {
      return this.deweySearch(bookArray, deweyNum, book, index - 1)
    } else {
      return this.deweySearch(bookArray, deweyNum, book, index + 1)
    }
  },
  inOrder(tree, values = []) {
    if (tree.left) {
      values = this.inOrder(tree.left, values)
    }
    values.push(tree.value);
    if (tree.right) {
      values = this.inOrder(tree.right, values)
    }
    return values;
  },
  preOrder(tree, values = []) {
    values.push(tree.value);
    if (this.left) {
      values = this.preOrder(tree.left, values);
    } 
    if (this.right) {
      values = this.preOrder(tree.right, values);
    }
    return values;
  },
  postOrder(tree, values = []) {
    if (this.left) {
      values = this.postOrder(tree.left, values)
    }
    if (this.right) {
      values = this.postOrder(tree.right, values)
    }
    values.push(tree.value)
    return values;
  },
  maxProfit(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const profit = arr[j] - arr[i];
        if (profit > max) {
          max = profit;
        }
      }
    }
    return max;
  }
}

module.exports = dsaSearching;
