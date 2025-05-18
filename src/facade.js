import { getAllComments, getGamesNames, getSpecificUserData, updateAvarageScoreOfGame, createCommentFromSpecificGame } from "./endpoints.js";
import { createPost, createGameSelectBox, createSidebarPerfil, createLanguageSelectBox, translationsOptions, createCommentBox } from "./utils.js";

//Renderiza todos os comentários já feitos

export async function renderPost(language, username) {
    const comments = await getAllComments();
    const sessionUser = await getSpecificUserData(username); 

    allLoadedComments = comments; // armazenar todos os comentários
    currentLanguage = language;
    currentUsername = username;

    displayFilteredPosts(comments, language, sessionUser); // função separada para renderizar
    setupFilters(); // ativa os filtros após carregar
}

//Renderiza a caixa de comentários 
export async function renderCommentBox(language) {
    createCommentBox(language);
    
}

//Renderiza a sidebar de perfil do usuário
export async function renderSideBar(username, language) {
    const user = await getSpecificUserData(username);

    createSidebarPerfil(user, language)
}

//Renderiza as opções de seleção de jogos dentro da comment box
export async function renderGameSelectionBox() {
    const gamesName = await getGamesNames();

    for (const names of gamesName) {
        createGameSelectBox(names)
    }
}

//Renderiza as opções de seleção de jogos dentro da comment box
export async function renderLanguageSelectionBox() {

    const languages = translationsOptions;

    for (const language of languages) {
        createLanguageSelectBox(language);
    }

}

//Realiza a criação de um novo comentário
export async function makeComment(username) {

     const game = document.getElementById("game-select").value.trim();
     const score = document.getElementById("score-select").value.trim();
     const comment = document.getElementById("commentBox").value.trim();
     const platform = document.getElementById("platform-select").value.trim();

    const user = await getSpecificUserData(username)

    const updateScore = await updateAvarageScoreOfGame(game, score);

    await createCommentFromSpecificGame(game, comment, user, score, platform);
}
let allLoadedComments = []; // Para armazenar todos os comentários após carregar
let currentLanguage;
let currentUsername;

function displayFilteredPosts(comments, language, sessionUser) {
    const main = document.querySelector("main");
    main.querySelectorAll(".post").forEach(post => post.remove()); // remove todos os posts atuais

    comments.forEach(async (comment) => {
        const user = await getSpecificUserData(comment.user);
        createPost(comment, user, language, sessionUser);
    });
}

function setupFilters() {
    const gameSelect = document.getElementById("game-select");
    const platformSelect = document.getElementById("platform-select");
    const scoreSelect = document.getElementById("score-select");

    const filterFunction = async () => {
        const game = gameSelect.value;
        const platform = platformSelect.value;
        const score = scoreSelect.value;

        const filtered = allLoadedComments.filter(comment => {
            return (
                (game === "" || comment.game_name === game) &&
                (platform === "" || comment.platform === platform) &&
                (score === "" || comment.score.toString() === score)
            );
        });

        const sessionUser = await getSpecificUserData(currentUsername);
        displayFilteredPosts(filtered, currentLanguage, sessionUser);
    };

    gameSelect.addEventListener("change", filterFunction);
    platformSelect.addEventListener("change", filterFunction);
    scoreSelect.addEventListener("change", filterFunction);
}
