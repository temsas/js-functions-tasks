// BEGIN
const groupBy = (arr, property) =>{
    const groupObject = arr.reduce((accumulator, object) => {
        const propertyValue = object[property];

        if (!accumulator[propertyValue]) {
            accumulator[propertyValue] = [];
        }
        accumulator[propertyValue].push(object);
        return accumulator;
    },{});
return groupObject;
}
export default groupBy;
// END