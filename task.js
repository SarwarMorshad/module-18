// !! Task 1
// const colors = ["red", "blue", "green", "yellow", "orange"];
// const colorsReversed = [];

// for (const color of colors) {
//   colorsReversed.unshift(color);
// }
// console.log(colorsReversed); // Output: ["orange", "yellow", "green", "blue", "red"]

// !! Task 2
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// }
// console.log(evenNumbers); // Output: [12, 98, 78, 46]

// !! Task 3 Use a for...of loop to concatenate all the elements of an array into a single string.
// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// let concatenatedString = "";
// for (const number of numbers) {
//   concatenatedString += number;
// }
// console.log(concatenatedString);

// !! Task 4
// const statement = "I am a hard working person";
// let statementWordReversed = "";
// for (const word of statement.split(" ")) {
//   statementWordReversed = word + " " + statementWordReversed;
// }
// console.log(statementWordReversed); // Output: "person working hard a am I"

// !! Task 5
// let Input = [1, 2, 3];
// let Output = [...Input];
// Output[0] = 99;
// console.log(Output);

// !! Task 6
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

for (const student of students) {
  console.log(`${student.name} scored ${student.marks}`);
}
// Output: "John scored 85", "Alice scored 90"

// !! Task 7
// const twoDArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// twoDArray[1][0] = 99;
// console.log(twoDArray);
