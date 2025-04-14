// Question 29: Write a function that counts how many times a specific element appears in an array.

function countOccurrences(arr, val) {
    return arr.filter(x => x === val).length;
}
  
console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));