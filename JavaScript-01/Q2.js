// 2 Using nested loops, print the pattern for n = 5: 1, 12, 123, 1234, 12345. Do not use
// string repeat methods.

const printPattern = (n) => {
  let output = "";
  if(n < 1) return "Invalid Output";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      output += j;
    }
    if (i !== n) output += ", "; 
  }
  return output;
};

let pattern = printPattern(5);
console.log(pattern);