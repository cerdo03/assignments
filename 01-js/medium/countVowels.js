/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Convert the string to lowercase to consider both uppercase and lowercase vowels
  const lowerStr = str.toLowerCase();

  // Initialize a counter for vowels
  let vowelCount = 0;

  // Iterate over each character in the string
  for (let char of lowerStr) {
    // Check if the character is a vowel
    if ('aeiou'.includes(char)) {
      vowelCount++;
    }
  }

  // Return the total count of vowels
  return vowelCount;
}

module.exports = countVowels;