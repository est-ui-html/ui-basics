// // document.designMode = "on";
// // "use strict"

// let arr = ["tony", "stark", "avengers"];
// let obj = { name: "Stark", sal: 3200898, role: "Scientist", currency: "USD" };

// // For loop: only for arrays
// for(let i=0; i < arr.length ; i++) {
// 	console.log(arr[i]);
// }

// // For in loop for both the Object and Array
// // for..in loop in case of an Object
// for(let key in obj) {
// 	console.log(`key is ${key} and value is ${obj[key]}`);
// }
// // for..in loop in case of an Array
// for(let index in obj) {
// 	console.log(`Index is ${index} and value is ${arr[index]}`);
// }


// // For..of loop on Array only. Not applicable on the object
// for(let element of arr) {
// 	console.log(element);
// }




// // Prime number solution.
// var n = 100;
// var count = 0;
// var prime = false;
// for(var i = 2; i <= n; i++){
// 	for(var j = 2; j < i; j++ ){
// 		if(i%j !== 0){
// 			prime = true;
// 		} else {
// 			prime = false;
// 			break;
// 		}
// 	}	
// 	if(i === 2 || prime === true) {
// 		console.log(i);
// 		count++;
// 		prime = false;
// 	}
// }
// console.log(count);


// ==========>
var kvArray = [{key: 1, value: 10}, {key: 2, value: 20}, {key: 3, value: 30}];

var arr = kvArray.map((ele) => {
	return {...ele};
});

console.log(kvArray);
console.log(arr);

arr[2].key = 45; 

console.log(kvArray);
console.log(arr);