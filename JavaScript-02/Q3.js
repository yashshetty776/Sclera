// 3. Create an object with a method getName() that logs this.name. Then rewrite the method using an
// arrow function and explain how 'this' behaves differently.


const User = {
    name: "Yash",
    getName() {
        console.log(this.name);   
    }
}

User.getName();

const arrowUser = {
    name: "Yash",
    getName: () => {
        console.log(this.name);
    }
};

arrowUser.getName(); 
console.log(this);