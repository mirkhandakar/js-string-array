const products = [
    'Apple Laptop Pro',
    'Apple laptop XE',
    'Apple I phone pro',
    'Apple I Phone 10',
    'Dell laptop Vostro',
    'Dell Laptop XP',
    'Hp Laptop pro',
    'Vivo phone 7',
    'Vivo Phone 8'
];

const searching = 'dell';

const output = [];

/* for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
} */

// console.log(output);

/* for (product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
} */

// console.log(output);

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);