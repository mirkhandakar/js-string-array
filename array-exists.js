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
const friends = ['Kutub', 'Liton', 'Shamol', 'Sabbir'];
const myBigbuddy = megeFriend(friends);
console.log(myBigbuddy);