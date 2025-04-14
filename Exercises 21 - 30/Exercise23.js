// Question 23: Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number).

function validatePassword(pw) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(pw);
}
  
console.log(validatePassword("StrongPass1"));