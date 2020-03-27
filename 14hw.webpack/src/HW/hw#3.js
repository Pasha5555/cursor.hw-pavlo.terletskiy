export default function getMaxDigit(number){
    number = number.toString();
    let result;
    result = number.split("");
    let max = 0;
    for(let i=0; i<result.length; i++){
        if(max < result[i]){
            max = result[i];
        }
    }
    return max;
}

