function megeFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigbuddy = megeFriend(friends);
// console.log(myBigbuddy);

//indexof

if (friends.indexOf('Lion') != -1) {
    // console.log('lion is exist');
}
//includes
if (friends.includes('Lion')) {
    console.log('lion is exits');
}
//concatinate
const first = [1, 3, 5];
const second = [2, 4, 6];
const combined = first.concat(second);
console.log(combined);