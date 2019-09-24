// function showPassword() {
// 	document.getElementsByName('password')[0].type = "text";
// }

// function hidePassword() {
// 	document.getElementsByName('password')[0].type = "password";
// }

function toggleShow() {
	let currentType = document.getElementsByName('mypassword')[0].type;
	document.getElementsByName('mypassword')[0].type = currentType === "password" ? "text" : "password"
}

// alert("I'm a disturbing alert ...");

// let abc = function() {
// 	console.log("I'm executed -----> ", arguments[0](), "Hello", arguments[9]);
// 	// console.log("I'm executed -----> ", arguments[0](), "Hello", arguments[9], x);
// 	// for(let index in arguments) {
// 	// 	console.log(arguments[index]);
// 	// }
// }

// // const x = () => {
// //   console.log(0);
// // }

// abc(() => {
// 	console.log("I'm arrow function");
// }, 1, "Pankaj", false, true );


// function f1() {
// 	console.log("I'm f1 function");
// 	return "1234"
// }
// console.log(f1());


// var num = 10;
// var	num = 35;

// function print() {
// 	console.log(num);
// }

// print();
// console.log(num);

// // ============================


// let num1 = 10;
// let	num1 = 35;

// function print1() {
// 	console.log(num1);
// }


// print1();
// console.log(num1);