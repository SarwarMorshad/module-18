const products = [24, 50, 100, 200, 500];
console.log(products);
const comp_product = [];

for (const product of products) {
  comp_product.push(product);
}
console.log(comp_product);
comp_product.push(1000);
console.log(comp_product);

// !! Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]
// !! Copying arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
