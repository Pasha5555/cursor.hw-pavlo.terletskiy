
//1.
function getRandomArray(length, min, max){
    let numbers = [];
    for(let i =0; i<length; i++){
        numbers[i] = Math.floor(Math.random() * (max-min) + min);
    }
    return numbers;
}
console.log(getRandomArray(20,-10,50));

//3.
function getAverage(...numbers){
    let wholeNumbers;
    wholeNumbers = numbers.filter(numb => (parseFloat(numb) - parseInt(numb) === 0));
    return wholeNumbers.reduce((acum, numb) => acum + numb, 0)/wholeNumbers.length;
}
console.log(getAverage(20,-40,50, 3.75, 2.5, 30));

//5.
filterEvenNumbers = (...numbers) => numbers.filter( num => num%2 !== 0); 
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

//6.
function countPositiveNumbers(...numbers){
    numbers = numbers.filter( numb => numb > 0); 
    return numbers.length;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

//7.
getDividedByFive = (...numbers) => numbers.filter( numb => numb%5 === 0);
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//8.
function replaceBadWords(string, ...badWords){
    string = string.split(" ");
    for(let j = 0; j < string.length; j++){
        for(i = 0; i < string.length; i++){
            if(string[i].includes(badWords[j])){
                string[i] = string[i].replace(badWords[j], '*'.repeat(badWords[j].length));
            }
        }
    }
    return string.join(" ");   
}
console.log(replaceBadWords("Are you fucking sucking kidding bitch?", "fuck", "suck", "shit", "bitch"));



