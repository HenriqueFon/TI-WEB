import { translations } from '../dictionary/language.js';

//Gera um número aleatório para o Id
export function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    return randomNumber;
}

//Traduz a página
export function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[language][key]) {
            element.innerText = translations[language][key];
        }
    });

    // Atualiza placeholders
    const placeholders = document.querySelectorAll("[data-translate-placeholder]");
    placeholders.forEach(element => {
        const key = element.getAttribute("data-translate-placeholder");
        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });
}

export function createPost(comment) {
    // Criando um novo elemento <article>
    const post = document.createElement("article");
    post.classList.add("post");

    // Definindo o conteúdo com innerHTML
    post.innerHTML = `
        <header>
            <div class="author">
                <img class="avatar" src="${comment.image}" alt="Avatar de ${comment.user}">
                <div class="authorInfo">
                    <strong>${comment.user}</strong>
                    <span>${comment.role}</span>
                </div>
            </div>
            <time dateTime="${new Date().toISOString()}" data-translate="post-time">${comment.time}</time>
        </header>

        <div class="content">
            ${comment.text.map(text => `<p>${text}</p>`).join("")}
        </div>
    `;

    // Adicionando o post ao <main>
    document.querySelector("main").appendChild(post);
}

export function renderSidebarPerfil(coverImage, avatarImage, name, comment) {

    const perfil = document.createElement("aside");
    perfil.classList.add("sidebar");

    perfil.innerHTML = `
        <img class="cover" src="${coverImage}" alt="background-photo">
        <div class="profile">
            <img class="avatar" src="${avatarImage}">
            <strong>${name}</strong>
            <span>${comment}</span>
        </div>
        <footer>
            <a href="#" data-translate = "profile-edit">Editar seu perfil</a>
        </footer>
    `;

    document.querySelector(".wrapper").prepend(perfil);
    
}

