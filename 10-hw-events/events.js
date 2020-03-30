function Keyboard(event) {
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
document.addEventListener('keydown', Keyboard);


const buttons = document.getElementsByTagName("button");
const arrOfButtons = Array.from(buttons);
arrOfButtons.forEach(click => {
  click.addEventListener('click', function() {
    const audio = new Audio();
    audio.src = `audio/${click.id}.wav`;
    audio.play();
    audio.currentTime = 0;
    click.classList.add('doing');
        setTimeout(()=>audio.pause(), 3000);

        setTimeout(()=>{
            click.classList.remove('doing')
        },500);
  });
});