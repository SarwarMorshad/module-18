const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  //   console.log(fruits[i]);
}

for (const fruit of fruits) {
  //   console.log(fruit);
}

// array reversal
// const reversedFruits = fruits.slice().reverse();
// console.log(reversedFruits);

// array reverse using for loop
const reversedFruits = [];
for (let i = 0; i < fruits.length; i++) {
  reversedFruits.unshift(fruits[i]);
}
console.log(reversedFruits);
