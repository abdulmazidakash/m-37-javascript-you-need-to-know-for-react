const products = [
	{name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
	{name: 'phone', price: 30000, brand: 'lenovo', color: 'silver'},
	{name: 'watch', price: 300, brand: 'lenovo', color: 'silver'},
	{name: 'sunglass', price: 200, brand: 'lenovo', color: 'silver'},
	{name: 'camera', price: 3200, brand: 'lenovo', color: 'silver'},

];


//1. map 
const names = products.map(product => product.name);
// console.log(names);

//2. forEach

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));


//3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

//4.find

const special = products.find(p => p.name.includes('n'));
console.log(special);