let N = +prompt("Введіть число N");
console.log(N);

while (N == NaN || (N - Math.floor(N) != 0) || N == ""){
    N = +prompt("Введіть число N ще раз");
}

let M = +prompt("Введіть число M");
console.log(M);

while (!(isNaN(M)==false && Number.isInteger(M) && M>=N)){
    M = +prompt("Введіть число M ще раз");
}

let skipPair = confirm("Пропускати парні числа?");

let sum=0;
for(let i = N; i<=M; i++){

    if(skipPair){
        if((i%2)!==0){
            sum+=i;
        } 
    }
    else{
            sum+=i;
        }
}

if(skipPair){
    skipPair="пропускаючи парні";
} else{
    skipPair="не пропускаючи парні";
}

let result = document.writeln(`<strong>Сума чисел від N до M, ${skipPair} = ${sum}</strong>`);

