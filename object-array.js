const players = [{}, {}, {}];

const employees = [
  { name: "Alice", designation: "content writer", age: 30, salary: 50000 },
  { name: "Bob", designation: "software engineer", age: 25, salary: 60000 },
  { name: "Charlie", designation: "data analyst", age: 28, salary: 55000 },
  { name: "David", designation: "project manager", age: 35, salary: 70000 },
];

console.log(
  "I am " +
    employees[1].name +
    ". I work as a " +
    employees[1].designation +
    ". My age is " +
    employees[1].age +
    ". And My salary is " +
    employees[1].salary
); // Output: Bob

// print using template literals
console.log(
  `I am ${employees[1].name}. I work as a ${employees[1].designation}. My age is ${employees[1].age}. And My salary is ${employees[1].salary}`
); // Output: Bob

// print using for of loop only for Bob
// for (const employee of employees) {
//   console.log(
//     `I am ${employee.name}. I work as a ${employee.designation}. My age is ${employee.age}. And My salary is ${employee.salary}`
//   );
// }

// print using for of loop only for Bob
for (const employee of employees) {
  if (employee.name === "Bob") {
    console.log(
      `I am ${employee.name}. I work as a ${employee.designation}. My age is ${employee.age}. And My salary is ${employee.salary}`
    );
  }
}
