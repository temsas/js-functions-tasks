// BEGIN
const prime = (number) =>{
    if ( number <= 1){
        return false
    }
    for (let i = 2; i <= Math.sqrt(number);i++){
        if ( number % i === 0 ){
            return false;
        }
    }
    return true;
}
const sayPrimeOrNot = (number) =>{
    if (prime(number)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
export default sayPrimeOrNot;
// END