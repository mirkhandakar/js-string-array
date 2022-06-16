const anthem = 'Amar Sonar Bangla, Ami Tomai Valobasi';
const word = anthem.split(' ');
const wordA = anthem.split('a');
// console.log(wordA);

// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherslice = anthem.substr(5, 13);
// console.log(anotherslice);

// substring
const examOne = anthem.substring(5, 13);
// console.log(examOne);

// concat
const first = 'Amader';
const second = 'City';
const fullString = first.concat(second).concat('abc');
// console.log(fullString);

// join
const word2 = ['Devid', 'Cameron', 'Zahid', 'Kawsar'];
// const myJoin = word2.join('');
// const myJoin = word2.join(' ');
// const myJoin = word2.join(',');
// const myJoin = word2.join(', ');
const myJoin = word2.join('www');

console.log(myJoin);