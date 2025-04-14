// Question 20: Create a function that determines if a string contains only numbers.

function isNumeric(str) {
    return /^[0-9]+$/.test(str);
}
  
console.log(isNumeric("12345"));