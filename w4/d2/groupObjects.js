/* 
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.
  Make the grouping case-insensitive.
  Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Baby Yoda",
        category: "Star wars",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Shibe",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Shibe",
            category: "Cute",
        },
    ],
    food: [
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
    ],
    "cradle of civilization": [
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items, groupKey) {
    let groupedVals = {};

    for (const item of items) {
        let keyLower = item[groupKey].toLowerCase();

        if (!groupedVals.hasOwnProperty(keyLower)) {
            groupedVals[keyLower] = [item];
        } else {
            groupedVals[keyLower].push(item);
        }
    }

    return groupedVals;
}

console.log(groupObjects(objects, "name"));
