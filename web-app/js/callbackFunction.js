let func1 = function(abc) {
	console.log("I'm function 1 ");
	abc();
}

let func2 = function() {
	console.log("I'm function 2");
};


func1(func2);  // func2 is a callback function


// On the fly passing a function
func1(function() {
	console.log("I'm anonymous function passed on the fly");
});

// On the fly passing an arrow function
func1(() => {
	console.log("I'm arrow function passed on the fly");
});


function add(a,b, callback) {
	let res = a + b;
	callback(res); 			// passing result as the argument in the callback function
}

add(10,45, (result) => {
	console.log(result);
});


// Higher order function - A function which returns another function
let demo = function() {
	return function() {
		console.log("inner function executed!!!");
	}
}

let func = demo();
func();
// or directly like below in a single line:
demo()();



// Executing an anonymous function inside an array
let arr1 = [() => 2*2, () => 3*3]
console.log(arr1[0]());