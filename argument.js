function addNumbers(num1, num2) {
    // console.log(arguments);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}

const sum = addNumbers(23, 55, 32, 45, 69, 420);
// console.log(sum);

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}

const name = getFullName('Omok', 'Sonket', 'bin', 'hanif', 'sanket');
console.log(name);