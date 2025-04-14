// Question 7: Write a function that returns the reverse of a string input.

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("World"));