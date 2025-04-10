import {split} from "lodash/string.js";


const run = (text) => {
    // BEGIN
    if (!text || text.length < 4){
        return null;
    }

    const takeLast = (str, n) =>{
        if(!str || str.length < n){
            return null
        }

        const lastText = str.slice(-n)
        return lastText.split('').reverse().join('')
    }

    // END
  
    return takeLast(text, 4);
  };
  
export default run;