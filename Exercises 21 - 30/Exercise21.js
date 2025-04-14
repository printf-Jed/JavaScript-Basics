// Question 21: Write code that finds the second smallest number in an array.

let values = [10, 5, 8, 3, 6];
values.sort((a, b) => a - b);

console.log("Second smallest:", values[1]);
