// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums = [1, 4, 3, 6, 9, 15];

const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 15];

const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @param {Function} callback
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, callback) {
    let i = 0;
    while (arr.length > 0 && i < arr.length) {
        let el = arr[i];
        let callbackResponse = callback(el);

        if (callbackResponse === false) {
            arr.splice(i, 1);
        } else if (callbackResponse === true) {
            i++;
        }
    }

    return arr;
}

console.log(dropIt(nums, callback1));
