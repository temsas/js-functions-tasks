// BEGIN
const getChildren = (users) =>{
    const arrChildren = users.map(user => user.children)
    const reusltChildren = arrChildren.flat()
    return reusltChildren;
}
export default getChildren;
// END