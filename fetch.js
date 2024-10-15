//1. JSON stringify, parse

const student = {
	name: 'shakib khan',
	age: 44,
	movies: ['king khan', 'dhakar mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);


//2. fetch

fetch('url')
	.then(res => res.json())
	.then(data => console.log(data))

//3. keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//for 
const numbers = [ 23, 43,25, 43];
numbers.forEach(num => console.log(num))
numbers.map(num => num * 2);

//for of on array like object
//loop on an object using for in

//add or remove from an array
const products = [
	{name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
	{name: 'phone', price: 30000, brand: 'lenovo', color: 'silver'},
	{name: 'watch', price: 300, brand: 'lenovo', color: 'silver'},
	{name: 'sunglass', price: 200, brand: 'lenovo', color: 'silver'},
	{name: 'camera', price: 3200, brand: 'lenovo', color: 'silver'},

];

const newProduct = {name: 'webcam', price: 400, brand: 'lal'};

//copy products array and then add newProduct
const newProducts = [...products, newProduct];


//create a new array without one specific item
//remove phone means create a new array without phone

const remaining = products.filter(p => p.name !== 'phone');

