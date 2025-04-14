// Question 16: Create a program that calculates the sum of all numbers from 1 to n

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
  
console.log(sumTo(10));
  