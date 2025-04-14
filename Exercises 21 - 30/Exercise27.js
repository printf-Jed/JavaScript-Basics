// Question 27: Write a program that generates the Fibonacci sequence up to n terms.

function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
}
  
console.log(fibonacci(10));