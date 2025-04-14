// Question 10: Create a function that checks if a string is a palindrome.

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam"));