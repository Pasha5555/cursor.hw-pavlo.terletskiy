const BASE = 'https://swapi.co/api/';
const config = {
    params: {
        page: count = 1
    }
};


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
        <img src="./img/ava.jpg" width = 300px'>
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

async function getPlanets(config){
    try{
        const res = await axios.get(BASE + 'planets/', config);
        let planets = res.data.results;
        let container = document.querySelector('.planets');
        container.innerHTML = '';
        planets.forEach(planet =>{
            let divPlanet = document.createElement('div');
            divPlanet.innerHTML = `
            <h4>• ${planet.name}</h4>
            `;
            divPlanet.classList.add('planet');
            container.append(divPlanet);
        });
    } catch (error){
        console.log(error);
    }
}
getPlanets(config);

document.querySelector('.next').addEventListener('click', function () {
    config.params.page++;
    if(config.params.page <= 7) {
        getPlanets(config);
    } else { 
        config.params.page = 7;
        alert("This is the end");
    }
});
document.querySelector('.back').addEventListener('click', function () {
    config.params.page--;
    if(config.params.page >= 1) {
        getPlanets(config);
    } else {
        config.params.page = 1;
    }
});











