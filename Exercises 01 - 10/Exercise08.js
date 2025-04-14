//Question 8: Create a function that counts the number of vowels in a string.

function vowelCounter(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
}

console.log(vowelCounter("Javascript"));
