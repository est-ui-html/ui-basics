let data = [
	{
		name: "Pavithra",
		id: 5100,
		phone: 9819759230
	},
	{
		name: "Ramesh",
		id: 5101,
		phone: 9819759231
	},
	{
		name: "Ranjitha",
		id: 5102,
		phone: 9819759232
	},
	{
		name: "Shiva",
		id: 5103,
		phone: 9819759233
	},
	{
		name: "Pankaj",
		id: 5132,
		phone: 9819759234
	}
];

console.log(data);
// let copiedData = data;
// copiedData[0]['name'] = "Pooja";
let copiedData = [...data];
copiedData[0] = {...copiedData[0], name: "Pooja"};
console.log(copiedData);