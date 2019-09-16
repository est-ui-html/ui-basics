// ...



// let x = { name: "John", age: 24 };
// ...x gives us ---->  name: "John", age: 24
// Using braces {} wraps the spread content as the array so it is {...x}

let x = { name: "John", age: 24 };
let y = {...x};  // Breaking the reference and copying it into another variable y
console.log("x : ----> ", x);
console.log("y : ----> ", y);
// let y = Object.assign({}, x); // Alternate way to assign the seperate copy of x in y
y.name = "Tony";
console.log("x : ----> ", x);
console.log("y : ----> ", y);
console.log("keys in x: ----> ", Object.keys(x));
console.log("keys in y: ----> ", Object.keys(y));


// Spread operator in Array -> ...
let a1 = [1,2,3];
let a2 = [...a1];
console.log("a1 : ----> ", a1);
console.log("a2 : ----> ", a2);

a1[2] = 67;
a2[0] = 123;
console.log("a1 : ----> ", a1);
console.log("a2 : ----> ", a2);