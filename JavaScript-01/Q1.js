// 1 Write a function checkValue(value) that prints the value, its type, and whether it is
// truthy or falsy. Test it with '', 'hello', 0, 10, null, undefined, [], {}.

checkValue = (value) => {
    console.log("Value:", value);
    console.log("Type:", typeof(value));
    console.log(value ? "It is truthy" : "It is falsy");
}

checkValue('');
checkValue('hello');
checkValue(0);
checkValue(10);
checkValue(null);
checkValue(undefined);
checkValue([]);
checkValue({});