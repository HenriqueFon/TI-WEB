import { getGames } from "./endpoints.js"; 

const recentGames = document.getElementById('games');

export async function renderGames() {
    const registered_games = await getGames();

    console.log(registered_games);

    registered_games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';

        card.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <div class="game-info">
            <h2>${game.name}</h2>
            <div class="genre">${game.genre}</div>
            <div class="score">Nota média: ${game.avarage_score ?? game.average_score}</div>
        </div>
        `;

        if (index < 5) {
            recentGames.appendChild(card);
        } else {
            suggestedGames.appendChild(card);
        }
    });
    
}
