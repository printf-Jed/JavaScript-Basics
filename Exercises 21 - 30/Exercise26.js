// Question 26: Create a function that checks if two strings are anagrams.
// Anagram - A word or phrase formed by rearranging the letters of another word or phrase.

function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
  
console.log(areAnagrams("listen", "silent"));