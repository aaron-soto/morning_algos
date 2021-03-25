/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
  Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
    - you can assume the searchMethod will be valid
*/

const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
];

// Bonus
const searchFor4 = "E";
const searchBy4 = "lastName";
const searchMethod4 = "includes";
const expected4 = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
];

/**
 * Filters the given items based on the search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchBy The key to search by.
 * @param {string} searchFor The value of the given key to search for.
 * @returns {Array<Objects>} The matched items.
 */
// function filterByKey(items, searchFor, searchBy) {
//     let newArr = [];

//     for (let i = 0; i < items.length; i++) {
//         for (const key in items[i]) {
//             if (key === searchBy) {
//                 if (items[i][key].startsWith(searchFor)) {
//                     newArr.push(items[i]);
//                 }
//             }
//         }
//     }
//     return newArr;
// }

// console.log(filterByKey(people, searchFor1, searchBy1));

function filterByKey(items, searchFor, searchBy, searchMethod) {
    let newArr = [];

    for (let i = 0; i < items.length; i++) {
        for (const key in items[i]) {
            if (key === searchBy) {
                switch (searchMethod) {
                    case "startsWith":
                        if (items[i][key].startsWith(searchFor)) {
                            newArr.push(items[i]);
                        }
                    case "endsWith":
                        if (items[i][key].endsWith(searchFor)) {
                            newArr.push(items[i]);
                        }
                    case "includes":
                        if (items[i][key].includes(searchFor)) {
                            newArr.push(items[i]);
                        }
                }
            }
        }
    }
    return newArr;
}

console.log(filterByKey(people, "ed", "firstName", "includes"));
