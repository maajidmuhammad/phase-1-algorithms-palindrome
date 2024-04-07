function isPalindrome(word) {
  // Convert the word to lowercase
  word = word.toLowerCase();

  // Initialize pointers for the start and end of the word
  let left = 0;
  let right = word.length - 1;

  // Iterate until the pointers meet in the middle
  while (left < right) {
    // If characters at the pointers are not equal, it's not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }
    // Move the pointers towards the middle
    left++;
    right--;
  }
  
  // If the loop completes without returning false, the word is a palindrome
  return true;
}

module.exports = isPalindrome;
