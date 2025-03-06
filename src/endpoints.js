//Recupera todos jogos dentro do JSON SERVER
function getGames() {
    return fetch('http://localhost:3000/jogos')
        .then(response => response.json())
        .then(game => {
            return game;
        })
        .catch(error => { return `Erro ao adicionar jogo`});
}

//Recupera um jogo específico dentro do JSON SERVER
function getSpecificGame(name) {
    return fetch('http://localhost:3000/jogos')
        .then(response => response.json())
        .then(game => {
            
            const specificGame = game.find(jogo => jogo.nome.toLowerCase() === name.toLowerCase());

            return specificGame;
        })
        .catch(error => { return `Erro ao adicionar jogo`});
}

//Recupera uma lista de jogos com base na placa de video dentro do JSON SERVER
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

//Cadastra um novo jogo dentro do JSON SERVER
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

console.log(getGames());

module.exports = {
    getGames,
    getSpecificGame,
    getGamesByGraphicCard,
    postGames
};