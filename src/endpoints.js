import { generateRandomNumber } from './utils.js';
import { apiGet, apiPatch, apiPost } from './api.js';

const games_url = "http://localhost:3000";
const users_url = "http://localhost:3001";

//Valida a entrada do usuário
export async function login(username, password) {
    try {
        const userCredentials = await apiGet(`${users_url}/users`);
        const findUser = userCredentials.find(user => user.username === username);
        if (findUser) {
            if (findUser.password === password) {
                return true;
            } else {
                return false;
            }
        } else {
            return `User not found`;
        }
    } catch (error) {
        return `Erro ao buscar usuários: ${error.message}`;
    }
}

//Cria um novo usuário
export async function createNewUser(newUser) {
    try {
        if (await verifyValidUserForRegister(newUser.username)) {
            await apiPost(`${users_url}/users`, newUser);
            return `Novo usuário adicionado: ${newUser.username}`;
        } else {
            return "Usuário com nome idêntico já cadastrado!";
        }
    } catch (error) {
        return `Erro ao adicionar novo usuário: ${error.message}`;
    }
}

//Recupera todos jogos dentro do JSON SERVER
export async function getGames() {
    try {
        const games = await apiGet(`${games_url}/games`);
        return games;
    } catch (error) {
        return `Erro ao buscar jogos: ${error.message}`;
    }
}

//Recupera um jogo específico dentro do JSON SERVER
export async function getSpecificGame(name) {
    try {
        const games = await apiGet(`${games_url}/games`);

        const specificGame = games.find(game => game.name.toLowerCase() === name.toLowerCase());
        return specificGame;
    } catch (error) {
        return `Erro ao encontrar jogo: ${error.message}`;
    }
}

//Recupera comentários de um jogo específico dentro do JSON SERVER
export async function getCommentsFromSpecificGame(name) {
    try {
        const game = await getSpecificGame(name);
        return game ? game.comments : [];
    } catch (error) {
        return `Erro ao buscar comentários: ${error.message}`;
    }
}

//Cria um novo comentário para um jogo
export async function createCommentFromSpecificGame(gameName, comment) {
    try {
        const game = await getSpecificGame(gameName);

        if (!game) {
            throw new Error(`Jogo ${gameName} não encontrado`);
        }

        const updatedComments = [...(game.comments || []), comment];

        const response = await apiPatch(`${games_url}/games/${game.id}`, { comments: updatedComments });

        if (!response.ok) {
            throw new Error(`Erro ao adicionar comentário`);
        }

        return `Comentário adicionado ao jogo ${game.name}`;
    } catch (error) {
        return `Erro ao adicionar comentário: ${error.message}`;
    }
}


//Recupera uma lista de jogos com base na placa de video dentro do JSON SERVER
export async function getGamesByGraphicCard(graphicCardName) {
    try {
        const jogos = await apiGet(`${games_url}/games`);
        // const jogosData = await jogos.json();

        const filteredGames = jogos.filter(filtered =>
            filtered.graphic_cards &&
            filtered.graphic_cards.map(card => card.toUpperCase())
                .includes(graphicCardName.toUpperCase())
        );

        return filteredGames;
    } catch (error) {
        return `Erro ao buscar jogos: ${error.message}`;
    }
}

//Cadastra um novo jogo dentro do JSON SERVER
export async function postGames(newGame) {
    try {
        const response = await apiPost(`${games_url}/games`, newGame);

        if (!response.ok) {
            throw new Error(`Erro ao adicionar jogo`);
        }

        const data = await response.json();
        return `Novo jogo adicionado: ${newGame.name}`;
    } catch (error) {
        return `Erro ao adicionar jogo: ${error.message}`;
    }
}

//Valida se o nome de usuário já foi cadastrado
export async function verifyValidUserForRegister(username) {
    try {
        const userCredentials = await apiGet(`${users_url}/users`);
        const findUser = userCredentials.find(user => user.username === username);

        //se usuário for encontrado na base de dados, ele não é valido!
        if (findUser) {
            return false;
        } else {
            return true;
        }

    } catch (error) {
        return `Erro ao buscar usuários: ${error.message}`;
    }
}

//Gera um número aleatório para ser o Id do usuário dentro do Banco de dados
export async function generateUniqueId() {
    try {
        const userCredentials = await apiGet(`${users_url}/users`);
        let uniqueId;

        do {
            uniqueId = generateRandomNumber();
        } while (userCredentials.some(user => user.id == uniqueId));

        return uniqueId;
    } catch (error) {
        return `Erro ao buscar usuários: ${error.message}`;
    }
}

//Pega o Id do usuário
export async function getUserId(username) {
    try {
        const userCredentials = await apiGet(`${users_url}/users`);
        const findUser = userCredentials.find(user => user.username === username);

        if (findUser) {
            return findUser.id;
        } else {
            return "Não foi possível encontrar o Id do usuário";
        }
    } catch (error) {
        return `Erro ao buscar usuários: ${error.message}`;
    }
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

