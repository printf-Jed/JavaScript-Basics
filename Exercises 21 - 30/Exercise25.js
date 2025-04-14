// Question 25: Write a program that finds all factors of a given number.

function findFactors(n) {
    let factors = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) factors.push(i);
    }
    return factors;
}
  
console.log(findFactors(12));

  