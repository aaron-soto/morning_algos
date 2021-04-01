/* 
  Given to me (Neil) in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?). * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
    let chars = {};

    if (str.length === 0) {
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        const el = str[i];

        if (chars.hasOwnProperty(el)) {
            chars[el]++;
        } else {
            chars[el] = 1;
        }
    }

    if (str.length % 2 === 0) {
        for (const char in chars) {
            if (chars[char] % 2 != 0) {
                return false;
            }
        }
        return true;
    } else {
        let counter = 0;
        for (const char in chars) {
            if (chars[char] % 2 != 0) {
                counter++;
            }
        }
        if (counter > 1) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(canStringBecomePalindrome(str6));
