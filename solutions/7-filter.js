// BEGIN
const getGirlFriends =(users) =>{
    const friendsArr = users.map(user => user.friends)

    const  allFriend = friendsArr.flat()
    const girlsFriend = allFriend.filter(friend => friend.gender === 'female')
    return girlsFriend;
}
export default getGirlFriends;
// END