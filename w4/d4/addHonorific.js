/* 
    Given an honorific (name title) and array of full name strings,
    in "LastName, FirstName" format
    
    Return a new array of strings in this format: "Honorific FirstName LastName"
    Bonus: re-write it with built in functional programming methods

    EXAMPLE:
    const hon = "Mr.";
    const names = [];

    addHonorific(hon, names) should return [] because there are no names to add an honorific
    to.

    const hon2 = "Sir";
    const names2 = ["Sanchez, Rick", "Smith, Jerry"];

    addHonorific(hon2, names2) should return ["Sir Rick Sanchez", "Sir Jerry Smith"]
*/
function addHonorific(honorific, fullNames) {
    let result = [];
    for (k in fullNames) {
        let name_Arr = fullNames[k].split(", ");
        result.push(`${honorific} ${name_Arr[1]} ${name_Arr[0]}`);
    }
    return result;
}
const hon2 = "Sir";
const names2 = ["Sanchez, Rick", "Smith, Jerry"];
console.log(addHonorific(hon2, names2));

const hon3 = "Sir Doctor Professor General";
const names3 = [
    "Marymee, Kyle",
    "Albert, John",
    "Beelendorf, Patrick",
    "Stoopes, Erik",
    "Soto, Aaron",
];
console.log(addHonorific(hon3, names3));
