// Question 11: Write code that calculates the factorial of a number.


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
}

console.log(factorial(5));