import React, { Component } from 'react';
import numberArray from "./number_array";
import './App.css';

class App extends Component {

  linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }

  binarySearch = (array, value, sortedArray, start, end, numTries) => {
    var sortedArray = sortedArray === undefined ? array.sort() : sortedArray;
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    var numTries = numTries === undefined ? 1 : numTries;

    if (start > end) {
      return [-1, numTries];
    }

    const index = Math.floor((start + end) / 2);
    const item = sortedArray[index];

    if (item == value) {
      return [index, numTries];
    } else if (item < value) {
      return this.binarySearch(array, value, sortedArray, index + 1, end, numTries + 1)
    } else if (item > value) {
      return this.binarySearch(array, value, sortedArray, start, index - 1, numTries + 1)
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchFunction = event.target.searchFunction.value;
    const searchValue = event.target.searchValue.value;
    let searchIndex;
    let searchLength;

    if (searchFunction === "linearSearch") {
      searchIndex = this.linearSearch(numberArray, searchValue)
      searchLength = searchIndex ? searchIndex : numberArray.length;
    } else {
      const result = this.binarySearch(numberArray, searchValue);
      searchIndex = result[0];
      searchLength = result[1];
    }

    let message
    if (searchIndex === -1) {
      message = `${searchValue} Not Found! It took ${searchLength} searches!`
    } else {
      message = `${searchValue} found at Index: ${searchIndex}. It took ${searchLength} searches to find!`
    }

    event.target.searchResult.value = message;
  }

  render() {
    return (
      <main className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Number Search</h2>
          <div className="App__form_group">
            <label htmlFor="searchFunction">Function</label>
            <select id="searchFunction" name="searchFunction" required>
              <option value="">Choose Function</option>
              <option value="linearSearch">Linear Search</option>
              <option value="binarySearch">Binary Search</option>
            </select>
          </div>
          <div className="App__form_group">
            <label htmlFor="searchValue">Search Value</label>
            <input type="number" id="searchValue" name="searchValue" placeholder="Example: 23" required />
          </div>  
          <button type="submit">Submit</button>
          <output name="searchResult" />
        </form>
      </main>
    )
  }
}

export default App;
