//1. array destructuring 
const numbers = [34, 54];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [34, 54];

// console.log(x, y);

function boxify(num1, num2){
	const nums = [num1, num2];
	return nums;
}

// console.log(boxify(23, 42));

const [first, second] = boxify(23, 43);
// console.log(first, second);

const student = {
	name: 'shakib',
	age: 45,
	movies: ['king khan', 'dhakar mastan'];

}

const [firstMovie, secondMovie] = student.movies;

//object destructuring 
const {name, age} = {name: 'alu', age: 23};
const {name, age} = {id: 23, name: 'alu', salary: 2366, age: 23};

const employee = {
	id: 'vs code',
	designation: 'developer',
	machine: 'mac',
	language: ['html', 'css', 'js'];
	specifications: {
		height: 23,
		weight: 45,
		address: 'kumarkhali',
		drink: 'water',
		watch:{
			color: 'black',
			price: 500,
			brand: 'garmin'
		}
	}
}

const {machine, id} = employee;
const {weight, address} = employee.specifications;
const {brand} = employee?.specifications?.watch;
