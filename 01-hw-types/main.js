const milkPrice = 15.678;
const cheesePrice = 123.965;
const eggsPrice = 90.2345;

let sumPrices = milkPrice + cheesePrice + eggsPrice;
let sumPricesRound = Math.floor(milkPrice) + Math.floor(cheesePrice) + Math.floor(eggsPrice);//відкинув копійки
let middleSum = sumPrices/3;
let randomDiscount = Math.random();


document.writeln(`
     <strong>
     Макс. ціна: ${Math.max(milkPrice, cheesePrice, eggsPrice)}<br>
     Мін. ціна: ${Math.min(milkPrice, cheesePrice, eggsPrice)}<br>
     Сума вартості всіх товарів: ${sumPrices}<br>
     Сума вартості всіх товарів (без копійок), заокруглена в меншу сторону: ${Math.floor(sumPricesRound)} <br>
     Сума вартості всіх товарів, заокруглена в більшу сторону: ${Math.ceil(sumPrices/100)*100}<br>
     Чи є сума всіх товарів парною або непарною (${Math.floor(sumPrices)}) - "  ${Math.floor(sumPrices)%2 == 0}"<br>
     Здача з 500грн: ${(500 - sumPrices)} <br>
     Середнє значення: ${middleSum.toFixed(2)} <br>
     Сума всіх товарів зі знижкою ${randomDiscount*100}%: ${+(sumPrices-(sumPrices*randomDiscount)).toFixed(2)} <br>
     Втрачена вигода: ${sumPrices/2 - sumPrices*randomDiscount} <br>
     </strong>
`);

