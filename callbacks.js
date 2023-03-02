// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/


function getLength(Array, cb) {
  // getLength passes the length of the array into the callback.
  return cb(items.length)
}

function callBack(Array) {
  return items.length
}
console.log(items.length)
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(items.length - 1)
}
const lastArray = (Singal) => items.length - 1
console.log(last('LastAray', lastArray))


function sumNums(A, B, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(A, B)
}
const add = (A, B) => A + B
console.log(sumNums(8, 4, add))


function multiplyNums(A, B, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(A, B);
}
const multiply = (value1, value2) => value1 * value2
console.log(multiplyNums(4, 5, multiply))

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
}