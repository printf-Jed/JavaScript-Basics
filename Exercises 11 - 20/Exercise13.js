// Question 13: Write a program that converts a number of seconds into hours, minutes, and seconds.

let totalSeconds = 3672;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

console.log(`${hours}h ${minutes}m ${seconds}s`);
