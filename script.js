// Challenge 1
const strings = ['dog', 'by', 'cat', 'camping', 'large', 'flower', 'rabbit'];
const result1 = strings.filter(str => str.length >= 5);
console.log(result1);

// Challenge 2
const numbers = ['45', '55', '65', '75', '85'];
const result2 = numbers.map(num => Math.pow(parseInt(num), 2));
console.log(result2);

// Challenge 3
const alphabets = ['K', 'a', 'l', 'v', 'i', 'u', 'm'];
const result3 = alphabets.reduce((concatenatedString, alphabet) => concatenatedString + alphabet, '');
console.log(result3);

// Challenge 4
const number = [1, 2, 3, 4, 5];
const result4 = number.find(num => num % 2 === 0);
console.log(result4);

// Challenge 5
const ranks = [1, 5, 7, 8, 10, 7];
const result5 = ranks.findIndex(rank => rank === 7);
console.log(result5);

// Challenge 6
const num = [2, 4, 6, 8];
num.forEach((value, index) => console.log(`${index}:${value}`));

// Challenge 7
const marks = [35, 66, 25, 85, 75, 45];
const result7 = marks.some(mark => mark < 45);
console.log(result7);

// Challenge 8
const positive = [2, 3, 4, -1];
const result8 = positive.every(num => num > 0);
console.log(result8);

// Challenge 9
const cars = [
  {
    name: 'Audi',
    color: ['black', 'red', 'grey'],
    capacity: 5,
  },
  // (similar objects for Hyundai, Toyota, Renault)
];
cars.forEach((car, index) => {
  console.log(`${index + 1}. "${car.name}"`);
});

// Challenge 10
const person = {
  name: 'Ajay Kumar',
  age: 27,
  vehicles: {
    car: 'limousine',
    bike: 'ktm-duke',
    plane: 'lufthansa',
  },
  email: 'ajay@gmail.com',
  phoneno: 9978425555,
};

// 1.
delete person.phoneno;

// 2.
console.log(person.hasOwnProperty('bike')); // true
console.log(person.hasOwnProperty('house')); // false

// 3.
console.log(`${person.name} travels by ${person.vehicles.plane} called Air123`);

// 4.
person.email = 'ajaykumar@gmail.com';

// 5.
const keysArray = Object.keys(person);
console.log(keysArray);
