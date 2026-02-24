// 3 Given an array [5, 10, 15, 20, 25, 30], use array methods (no loops) to double all
// numbers, get numbers greater than 15, find total sum, check if all numbers are greater
// than 3, and check if any number is greater than 28.

const arr = [5, 10, 15, 20, 25, 30];

const doubled = arr.map(num => num*2);

const filtered = arr.filter(num => num>15);

const sum = arr.reduce((acc,curr) => acc+curr, 0);

const greaterThan3 = arr.every(num => num > 3);

const greaterThan28 = arr.some(num => num > 28);

console.log("Doubled Array:", doubled);
console.log("Array Greater than 15:", filtered);
console.log("Sum:", sum);
console.log("All Array Values Greater than 3:", greaterThan3);
console.log("Any Array Value Greater than 28:", greaterThan28);