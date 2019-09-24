// forEach function:

let numArray = [1,2,3,4,5];

let res  = numArray.find((num) => {
	return num > 7;
});
console.log("Res --> ", res);

let objectArray = [
	{name: "Pavithra",id: 5100,phone: 9819759230},
	{name: "Ramesh",id: 5101,phone: 9819759231},
	{name: "Ranjitha",id: 5102,phone: 9819759232},
	{name: null,id: 5130,phone: 9819759234},
	{name: "Shiva",id: 5103,phone: 9819759233},
	{name: "Pankaj",id: 5132,phone: 9819759234},
];


// forEach function()
console.log("\n ============== forEach() ======================");
let forResult = objectArray.forEach((ele, index) => {
	// console.log(ele);
		// ele.company = "Estuate";
	// return "abc"
});

console.log("Original objectArray : ", objectArray);
console.log("Return type of the forEach function is : ", forResult);

// map function()
console.log("\n ============== map() ======================");

let mapResult = objectArray.map((ele, index) => {
	// return {...ele};
	// if(ele.id === 5102) {
	// 	return { ...ele, company: "Estuate"};
	// }
	// return {...ele};
	ele.company = "Estuate"
	return ele;
});

mapResult[0].name = "Tony";
// mapResult[0].name = "Aish";
console.log("Original objectArray : ", objectArray);
console.log("Return type of the map function is : ", mapResult);

// filter function
console.log("\n ==================== filter() ======================");
let filterResult = objectArray.filter((ele) => {
	return ele.name == null;  // returns the ele if the name on the ele object is null
});

console.log("Original objectArray : ", objectArray);
console.log("Return type of the filter function is : ", filterResult);

// every function - All the "ele" must pass the condition mentioned in the
// callback function in order to get the return value as true.

console.log("\n ==================== every() =====================");
let everyResult = objectArray.every((ele) => {
	console.log(ele);
	return ele.name !== null;
});

console.log("Original objectArray : ", objectArray);
console.log("Return type of the every function is : ", everyResult);


// some function - If any one of the "ele" pass the condition mentioned inside the
// callback function then the method's return value will be true.
console.log("\n ==================== some() ======================");
let someResult = objectArray.some((ele) => {
	if(ele.id == 5102){
		return true;   // some breaks and comes out of the loop whenever it encounters true
	}
	return false;
});

console.log("Original objectArray : ", objectArray);
console.log("Return type of the some function is : ", someResult);


// Reverse method reverse the array on which it is called. Content will be reversed.
// let rev = [...objectArray];
// rev.reverse();
// console.log(rev);