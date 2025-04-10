// BEGIN
const dataConvert = (...dataArrs) =>{
    if (dataArrs.length === 0){
        return [];
    }
    const resultData = [];

    for(const dataArr of dataArrs){
        const year = dataArr[0];
        const month = dataArr[1] ;
        const day = dataArr[2];
        const date = new Date(year, month, day)
        const dateStr = date.toDateString()

        resultData.push(dateStr)
    }
return resultData
}
export default dataConvert;
// END