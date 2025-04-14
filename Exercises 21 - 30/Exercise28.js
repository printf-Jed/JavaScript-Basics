// Question 28: Create code that sorts an array of numbers without using the built-in sort method.

function manualSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
}
  
console.log(manualSort([4, 2, 7, 1, 3]));