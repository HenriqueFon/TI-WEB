const { getGames, getSpecificGame } = require('./endpoint');

getGames().then(games => console.log(games));
getSpecificGame('Minecraft').then(game => console.log(game));

function getGames() {
    return fetch('http://localhost:3000/jogos')
        .then(response => response.json())
        .then(game => {
            return game;
        })
        .catch(error => console.error('Erro ao buscar jogos:', error));
}

function getSpecificGame(name) {
    return fetch('http://localhost:3000/jogos')
        .then(response => response.json())
        .then(game => {
            
            const specificGame = game.find(jogo => jogo.nome.toLowerCase() === name.toLowerCase());

            return specificGame;
        })
        .catch(error => console.error('Erro ao buscar jogos:', error));
}

function getGamesByGraphicCard(graphicCardName) {
    return fetch('http://localhost:3000/jogos')
        .then(response => response.json())
        .then(jogos => {
            
            const filteredGames = jogos.filter(jogo => 
                jogo.placas_compativeis && 
                jogo.placas_compativeis.map(placa => placa.toUpperCase())
                .includes(graphicCardName.toUpperCase())
            );
            
            return filteredGames; 
        })
        .catch(error => {'Erro ao buscar jogos:', error});
}


function postGames(newGame) {
    return fetch('http://localhost:3000/jogos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGame)
    })
    .then(response => response.json())
    .then(data => {
        return `Novo jogo adicionado: ${newGame.nome}`;
    })
    .catch(error => { return `Erro ao adicionar jogo`});
}

const newGame = {
    "nome": "Cyberpunk 2077",
    "genero": "RPG"
};

getGamesByGraphicCard("RTX 3060").then(games =>{console.log(games)});



    