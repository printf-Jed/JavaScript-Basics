// Question 6: Create a program that determines if a year entered is a leap year.

let year1 = 2007;

// A year is considered a leap year if it is divisible by 4 and not divisible by 100, or if it is divisible by 400.
if (year1%4 === 0 && year1%100 !== 0 || year1%400 === 0) { 
    console.log(year1 + " is a leap year.");
} else {
    console.log(year1 + " is not a leap year.");
}