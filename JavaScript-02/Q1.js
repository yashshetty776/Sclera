// 1. Write a function parseUser(jsonString) that safely parses JSON using JSON.parse(). Handle
// invalid JSON using try-catch.


const json = '{"name":"Yash","age":21}';
const json2 = '{name:"Yash",age:21}';

const parseUser = (jsonString) => {
    try {
        const jsonObj = JSON.parse(jsonString);
        return jsonObj;
    }
    catch(e){
        console.error("Invalid JSON:", e.message);
        return null;
    }
}
console.log("Parsed Object: ", parseUser(json));
console.log("Parsed Object: ", parseUser(json2));