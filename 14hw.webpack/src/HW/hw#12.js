
import './img/ava.jpg';

export default function starWars(){
const axios = require('axios');
const BASE = 'https://swapi.co/api/';

async function getCharacters(){
    try{
        const episode = document.querySelector('.inputEpisode').value;
        if(episode < 7){
        const res = await axios.get(BASE + `films/${episode}/`);
        return res.data.characters;
    }else {
        document.write("Такого епізоду не існує, обновіть сторінку і спробуйте ще раз");
    }

} catch(error){
        console.log(error);
    }
}

function displayCharactetrs(characterApi){
    let container = document.querySelector('.characters');
    container.innerHTML = '';
    characterApi.forEach(async character=>{
        const result = await axios.get(character);
        const charDiv = document.createElement('div');
        charDiv.innerHTML = `
        <img src="./HW/img/ava.jpg" width = 300px'>
                <h3><u>${result.data.name}3</h4>
                <h4><u>${result.data.birth_year}</h5>
                <h4><u>${result.data.gender}</h5>
           `;
        charDiv.classList.add('character');
        container.append(charDiv);
    });
}
document.querySelector('.buttonInfo').addEventListener('click', () => {
    getCharacters().then(displayCharactetrs);
});
}