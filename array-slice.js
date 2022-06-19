const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const numberSliced = numbers.slice(3, 7);
// console.log(numberSliced);
// console.log(numbers);

const numberSliced2 = numbers.splice(3, 2);
console.log(numberSliced2);
console.log(numbers);