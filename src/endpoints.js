//Valida a entrada do usuário
function login(username, password) {
    return fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(userCredentials => {
        
        const findUser = userCredentials.find(user => user.username === username);

        if (findUser) {
            // Verifica se a senha também é válida
            if (findUser.password === password) {
                return true;
            } else {
                return false;
            }
        } else {
            return `User not found`;
        }

    })
    .catch(error => { return `Erro ao buscar usuários`});
}

//Valida se o nome de usuário já foi cadastrado
function verifyValidUser(username) {
    return fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(userCredentials => {
        
        const findUser = userCredentials.find(user => user.username === username);

        //se usuário for encontrado na base de dados, ele não é valido!
        if (findUser) {
            return false;
        } else {
            return true;
        }

    })
    .catch(error => { return `Erro ao buscar usuários`});
}

//Recupera todos jogos dentro do JSON SERVER
function getGames() {
    return fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(game => {
            return game;
        })
        .catch(error => { return `Erro ao buscar jogos`});
}

//Recupera um jogo específico dentro do JSON SERVER
function getSpecificGame(name) {
    return fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(game => {
            
            const specificGame = game.find(specific => specific.name.toLowerCase() === name.toLowerCase());

            return specificGame;
        })
        .catch(error => { return `Erro ao encontrar jogo`});
}

//Recupera comentários de um jogo específico dentro do JSON SERVER
function getCommentsFromSpecificGame(name){
    return getSpecificGame(name)
        .then(gameComments => {
            return gameComments.comments;
        })
        .catch(error => {
            return `Erro ao buscar comentários: ${error}`;
        });
}


//Recupera uma lista de jogos com base na placa de video dentro do JSON SERVER
function getGamesByGraphicCard(graphicCardName) {
    return fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(jogos => {
            
            const filteredGames = jogos.filter(filtered => 
                filtered.graphic_cards && 
                filtered.graphic_cards.map(card => card.toUpperCase())
                .includes(graphicCardName.toUpperCase())
            );
            
            return filteredGames; 
        })
        .catch(error => {'Erro ao buscar jogos:', error});
}

//Cadastra um novo jogo dentro do JSON SERVER
function postGames(newGame) {
    return fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGame)
    })
    .then(response => response.json())
    .then(data => {
        return `Novo jogo adicionado: ${newGame.name}`;
    })
    .catch(error => { return `Erro ao adicionar jogo`});
}

//Exemplo de objeto para cadastro de Jogos
// {
//     "name": "",
//     "image": "",
//     "genre": "",
//     "avarage_score": 0,
//     "graphic_cards": [],
//     "comments": [],
//     "id": ""
//   }

//Exemplo de objeto para criação de comentários
// {
//     id: 2,
//     user: "Carlos",
//     score: 8,
//     comment: "Ótimo jogo, gráficos incríveis!"
// };

module.exports = {
    login,
    verifyValidUser,
    getGames,
    getSpecificGame,
    getCommentsFromSpecificGame,
    getGamesByGraphicCard,
    postGames
};