

function randomColour(){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
const bigSquare = document.querySelector('.square');

function generateBlocks(){
    for(let i = 0; i<25; i++){
        const div = document.createElement('div');
        bigSquare.prepend(div);
    }
}
generateBlocks();

function generateBlocksInterval(){
    setInterval(()=> document.querySelectorAll("div").forEach(smallSquare => smallSquare.style.backgroundColor = randomColour()), 1000);

}
generateBlocksInterval();





