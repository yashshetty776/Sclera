// 4. Use nested destructuring to extract name, city, and zip from a nested user object.

const User = {
    name: "Yash",
    address: {
        city: "Mangalore",
        zip: "574212"
    },
};

const {name: fName, address: {city, zip}} = User;

console.log(fName);
console.log(city);
console.log(zip);

