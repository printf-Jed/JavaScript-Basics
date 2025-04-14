// Question 24: Create code that simulates a simple calculator with basic operations.

function calculator(a, b, op) {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Cannot divide by zero';
      default: return 'Invalid operation';
    }
}

console.log(calculator(5, 3, '*'));
