import { getAllComments, getGamesNames, getSpecificUserData } from "./endpoints.js";
import { createPost, createSelectBox, createSidebarPerfil } from "./utils.js";

//Renderiza todos os comentários já feitos
export async function renderPost(language) {
    const comments = await getAllComments();

    for (const comment of comments) {
        const user = await getSpecificUserData(comment.user); 
        createPost(comment, user.image, user.role, language);
    }
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
        createSelectBox(names)
    }
}