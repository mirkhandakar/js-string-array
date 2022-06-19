const numbers = [4, 8, 5, 2, 9, 7, 1];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
const friends = ['rahim', 'karim', 'anwar', 'orange', 'dablu', 'ziabul'];
const friendSort = friends.sort();
// console.log(friendSort);

const bigNumbers = [45, 89, 23, 98, 11, 74, 97, 47, 22];
const assendingBigNumber = bigNumbers.sort(function (a, b) {
    return a - b;
})

console.log(assendingBigNumber);