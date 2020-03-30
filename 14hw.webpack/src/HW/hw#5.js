function getAverage(...numbers){
    let wholeNumbers;
    wholeNumbers = numbers.filter(numb => (parseFloat(numb) - parseInt(numb) === 0));
    return wholeNumbers.reduce((acum, numb) => acum + numb, 0)/wholeNumbers.length;
}

function getMedian(...numbers){
    numbers = (numbers.filter(numb => (parseFloat(numb) - parseInt(numb) === 0))).sort((a,b)=>a-b);
    let middle;
    if(numbers.length%2==1){
    middle = numbers.length/2 - 0.5;
    return numbers[middle];
    } else{
        midle = numbers.length/2;
        return (numbers[middle] + numbers[middle++])/2;
    }
}

export { getAverage, getMedian };
