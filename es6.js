// const numbers = [5,43,5435,345];
const student = {
	name: 'sakib khan',
	age: 32,
	movies: ['king khan', 'dhakar mastan']
};


//1. template string

// const about = `my name is ${student.name} age ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
// console.log(about);

//2. arrow function
// const getFiftyFive = ()=> 55;
// const addSixtyFive = num => num + 65;
// const isEven = x => x % 2 === 0;
// const addThree = (x, y, z) => x + y + z;
// const doMath = (num1, num2) =>{
// 	const sum = num1 + num2;
// 	return sum;
// }


//3. spread operator
const numbers = [5,43,5435,345];
const newNumbers = [...numbers];

numbers.push(55);
numbers.push(55);
numbers.push(55);


//create a new array from an older array and an element
const currentNumbers = [...numbers, 99];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
