import _, {sum} from 'lodash';

// BEGIN
const average = (...numbers) =>{
    if(numbers.length === 0){
        return null;
    }
    const allSum = sum(numbers);
    const numbersAverage = allSum / numbers.length;
    return numbersAverage;

}
export default average;
// END