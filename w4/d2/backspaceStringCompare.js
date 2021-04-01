/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */

// const S2 = "ab##";
// const T2 = "c#d#";

function backspaceStringCompare(S, T) {
    // let sProcessed = "";

    for (let i = S.length - 1; i > 0; i--) {
        const el = S[i];
        let counter = 0;

        console.log(el, counter, S);

        if (el === "#") {
            S = S.slice(0, i) + S.slice(i + 1, S.length);
            counter++;
        } else if (counter > 0 && el != "#") {
            S = S.slice(0, i) + S.slice(i + 1, S.length);
            counter--;
        }
    }

    return S;
}

console.log(backspaceStringCompare(S2, T2));
