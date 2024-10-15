//how to declare a variable using let and const
const fatherName = 'arnold';
let season = 'rainy';
season = 'winter';

//condition
//6 basic components: >, <, ===, !==, <=, >=
if(fatherName === 'arnold' || season === 'rainy'){

}else if(fatherName === 'arnold'){

}else{
	
}


//3. array declare 
//index, length, push

const numbers = [23,4,43, 44,45];
numbers[0] = 56;

//4. for loop
for (let i = 0; i < numbers.length; i++){
	const number = numbers[i];
	// console.log(number);
}

//5. function 
function multiply(num1, num2){
	const result = num1 * num2;
	return result;
}

const output = multiply(4, 5);
// console.log(output);

//6. object
//3 ways to access property name

const student = {
	name: 'sakib khan',
	age: 34,
	movies: ['king khan', 'dhakar mastan']
}

const myVariable = 'age';
console.log(student[myVariable]); //access via property name in a variable

console.log(student.age); //direct by property
console.log(student['age']); //access via property name string



