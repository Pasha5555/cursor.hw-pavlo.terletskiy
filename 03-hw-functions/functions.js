
//1.
function getMaxDigit(number){
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
console.log(getMaxDigit(253574));


//2.
function Power(number, pow){
    let result = number;
    if(pow === 0){
        return 1;
    } else{
        for(let i = 1; i<pow; i++){
            result *= number;
        } 
    }
        return result;
}
console.log(Power(5,3));

//3.
function getName(name){
    name = name.toLowerCase();
    let capitalLeter = name[0].toUpperCase();
    name = name.replace(name[0],"");
    return capitalLeter + name;
}
console.log(getName("iVaN"));

//4.
getSumWithoutTax = salary => salary - (salary * 0.195);
console.log(getSumWithoutTax(1000));


//5.
getRandomNumber = (n, m) => Math.random()*(m-n) + n;
console.log(getRandomNumber(5, 20));



//6.
function countLetter(letter, str){
    let counter=0;
    for (i = 0; i<str.length; i++){
        if(letter===str[i].toLowerCase())
        counter++;
    }
    return counter;
}
console.log(countLetter("б", "Ббабайка"));


//7.
function convertCurrency(money){
    const uan = "UAN";
    const dollar = "$";
    if(money.includes(uan)){
        return parseInt(money)/25 + dollar;
    }else if(money.includes(dollar)){
        return parseInt(money)*25 + uan;
    } else {
        return 'Error! Неправильно вказана валюта.';
    }
}
console.log(convertCurrency("100UAN"));

//8.
function getRandomPassword(kstNumbers=8){
    let result = "";
    for(i=0; i<kstNumbers; i++){
        result += Math.floor(Math.random()*10);
    }
    return result;
}
console.log(getRandomPassword(10));


//9.
function deleteLetters(toDelete, str){
    for(i=0; i<str.length; i++){
        str = str.replace(toDelete,"");
    }
    return str;
}
console.log(deleteLetters('b', 'blablabla'));


//10.
function isPalindrome(str){
    str = str.toLowerCase().split(' ').join('');
    let reverseStr = str.toLowerCase().split(' ').reverse().join('');
    if (str === reverseStr){
        return true;
    } else{
        return false;
    }  
} 
console.log(isPalindrome("Аргентина манит негра"));


//11.
function deleteDuplicateLetter(str){
    str=str.toLowerCase();
    let changedStr ='';
    for(i = 0; i<str.length; i++){
        counter = 0;
        for(j = 0; j<str.length; j++){
            if(str[i] === str[j]){
                counter++;
            }  
        }
        if(counter<2){
            changedStr += str[i];
        }
    }
    return changedStr;
}
console.log(deleteDuplicateLetter("Бисквит был очень нежный"));

document.writeln(
    `<strong>Функція #1: ${getMaxDigit(253574)};<br>
    Функція #2: ${Power(5,3)};<br>
    Функція #3: ${getName("iVaN")};<br>
    Функція #4: ${getSumWithoutTax(1000)};<br>
    Функція #5: ${getRandomNumber(5, 20)};<br>
    Функція #6: ${countLetter("б", "Ббабайка")};<br>
    Функція #7: ${convertCurrency("100UAN")};<br>
    Функція #8: ${getRandomPassword(10)};<br>
    Функція #9: ${deleteLetters('b', 'blablabla')};<br>
    Функція #10: ${isPalindrome("Аргентина манит негра")};<br>
    Функція #11: ${deleteDuplicateLetter("Бисквит был очень нежный")};<br></strong>`
);