// let arr = [[1,2,3], [2,3,4], [3,3,3]];
// let arr = [5];

// console.log(arr);


// let a1 = [{
// 	name: "a",
// 	age: 12
// }, {
// 	name: "b",
// 	age: 34
// }, {
// 	name: "c",
// 	age: 90
// }]


// console.log(a1[0]);

// let mobile = { 
// 	brand: "Samsung", 
// 	network: "Vodafone",
// 	price: 17500,
// 	camera: {
// 		megapixel: 15,
// 		type: "multi focal"
// 	},
// 	arr: [1, 2, 3],
// 	dial: () => {
// 		console.log("Inside mobile object");
// 	}
// };

// mobile["brand"] = "Mi";

// mobile.dial();
// delete mobile.brand
// console.log(mobile);


// mobile.brand = "Samsung" ;
// // mobile.network = "Jio"

// // console.log(mobile);

// mobile.brand = "Nokia"
// console.log(mobile.arr[0].name.a);
// console.log(mobile);




// let a = 5;
// let b = 5;

// let obj = {
// 	a: 1,
// 	b: 1,	
// 	c: function() {
// 		console.log(a + b);
// 		// console.log(this.a);
// 	}
// }

// //obj.c();

// const f = (a = this.a ,b = this.b ) => {
// 	// let a = 45;
// 	// let b = 45;
// 	//console.log(this);
// 	console.log(a + b);
// }

// f();

// ==============================



let str = "Earth is the third planet from the Sun and the only astronomical object known to harbor life";
console.log(str);
let strArray = str.toLowerCase().split('');
console.log(strArray);

let vowelCount = 0;
let countObject = {};
let aCount = 0, eCount = 0, iCount = 0, oCount = 0, uCount = 0;

for(var ele of strArray) {
	if(ele === "a") {
		aCount += 1;
		countObject.a = aCount;
		vowelCount += 1;
	} else if(ele === "e") {
		eCount += 1;
		countObject.e = eCount;
		vowelCount += 1;
	} else if(ele === "i") {
		iCount += 1;
		countObject.i = iCount;
		vowelCount += 1;
	} else if(ele === "o") {
		oCount += 1;	
		countObject.o = oCount;
		vowelCount += 1;
	} else if(ele === "u") {
		uCount += 1;
		countObject.u = uCount;
		vowelCount += 1;
	}
}

console.log("The vowel count object is : ", countObject);
console.log("The total vowel count is : ", vowelCount);