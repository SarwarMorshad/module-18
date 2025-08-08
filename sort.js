// !! Array sort
const numbers = [5, 3, 8, 1, 2];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 5, 8]

const friends = ["Alice", "Bob", "Charlie"];
friends.sort();
console.log(friends); // Output: ["Alice", "Bob", "Charlie"]

const ages = [25, 30, 20, 35, 100, 18, 50];
ages.sort();
console.log(ages); // Output: [100, 18, 20, 25, 30, 35] (not sorted numerically)

ages.sort((a, b) => a - b);
console.log(ages); // Output: [18, 20, 25, 30, 35, 50, 100]
