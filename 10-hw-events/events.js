
function Events(event) {
    const audio = document.getElementById(event.key.toUpperCase());
    const button = document.querySelector(`.${event.key.toUpperCase()}`);
    audio.currentTime = 0;
    button.classList.add('doing');
    audio.play();
    setTimeout(()=>audio.pause(), 3000);

    setTimeout(()=>{
       button.classList.remove('doing')
    },500);
}

document.addEventListener('keydown', Events);
