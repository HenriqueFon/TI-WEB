import { getAllComments, getSpecificUserData } from "./endpoints.js";
import { createPost, createSidebarPerfil } from "./utils.js";

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