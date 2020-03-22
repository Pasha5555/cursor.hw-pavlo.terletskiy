function* createIdGenerator(){
    let i = 1;
    while(true){
        yield i++;
    }
}
let idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(fontSize){
    while(true){
        let font = yield fontSize;
        if(font === 'up'){
            fontSize +=2;
        }else if(font === 'down'){
            fontSize -=2;
        }
    }
}
const fontGenerator = newFontGenerator(14); 
const up = document.getElementById('up');
const down = document.getElementById('down');

up.addEventListener('click', function() {
    fontGenerator.next().value;
    let upSize = fontGenerator.next("up").value;
    let pxUp = document.getElementById('fontSize');
    pxUp.style.fontSize = `${upSize}px`;
    pxUp.innerHTML = `${upSize}px`;
    console.log(upSize);
});
down.addEventListener('click', function() {
    if(fontGenerator.next().value>2){
        let downSize = fontGenerator.next("down").value;
        let pxDown = document.getElementById('fontSize');
        pxDown.style.fontSize = `${downSize}px`;
        pxDown.innerHTML = `${downSize}px`;
        console.log(downSize);
    }
});