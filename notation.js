const person = {
	name: 'lal nil holud mia',
	profession: 'Traffic surgeon',
	age: 34,
	34: 'summer',
	'son-name': 'sunny',
	address: 'shahbag'
}

//dot notation 
const prof1 = person.profession;

//bracket notation 
const prof2 = person[profession];
// console.log(prof2);

const pName = 'profession';
const prof3 = person[pName];
// console.log(prof3);

const season = person[25];
console.log(season);

const son = person['son-name'];
console.log(son);