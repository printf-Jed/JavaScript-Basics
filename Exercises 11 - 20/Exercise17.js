// Question 17: Write code that finds the average of numbers in an array.

let scores = [80, 90, 70, 60];
let avg = scores.reduce((a, b) => a + b, 0) / scores.length;

console.log("Average:", avg);