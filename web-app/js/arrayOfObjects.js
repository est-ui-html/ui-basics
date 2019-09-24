let data1 = [
	{name: "Pavithra",id: 5100,phone: 9819759230,fresher: false},
	{name: "Ramesh",id: 5101,phone: 9819759231,fresher: false},
	{name: "Ranjitha",id: 5102,phone: 9819759232,fresher: false},
	{name: "Shiva",id: 5103,phone: 9819759233,fresher: false},
	{name: "Pankaj",id: 5132,phone: 9819759234,fresher: false}
];
let data2 = [
	{
		name: "Pavithra",
		id: 5100,
		phone: 9819759230,
		fresher: true
	},
	{
		name: "Shiva",
		id: 5103,
		phone: 9819759233,
		fresher: true
	},
	{
		name: "Pankaj",
		id: 5132,
		phone: 9819759234,
		fresher: true
	}
];

let result = data1.map(ele1 => {
	let temp = null;
	for(let element of data2) {
		if(element.id === ele1.id) {
			temp = { ...ele1, fresher: element.fresher }
		}
	}
	return temp = temp || ele1;
});
console.log("data1 ---> ", data2);
console.log("data2 ---> ", data1);
console.log("Resultant ---> ", result);

// console.log(data);
// // let copiedData = data;
// // copiedData[0]['name'] = "Pooja";
// let copiedData = [...data];
// copiedData[0] = {...copiedData[0], name: "Pooja"};
// console.log(copiedData);