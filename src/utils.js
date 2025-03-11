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

export function createPost(comment, image, role) {
    // Criando um novo elemento <article>
    const post = document.createElement("article");
    post.classList.add("post");

    // Definindo o conteúdo com innerHTML
    post.innerHTML = `
        <header>
            <div class="author">
                <img class="avatar" src="${image}" alt="Avatar de ${comment.user}">
                <div class="authorInfo">
                    <strong>${comment.user}</strong>
                    <span>${role}</span>
                </div>
            </div>
            <time dateTime="${new Date().toISOString()}" data-translate="post-time">Publicado há ${comment.date}</time>
        </header>

        <dev class = "game-name"><h2>${comment.game_name}</h2></dev>

        <div class="content">
            <p>${comment.comment}</p>
        </div>

        <dev class = "game-score"><h3>Nota: ${comment.score}</h3></dev>
    `;

    // Adicionando o post ao <main>
    document.querySelector("main").appendChild(post);
}

export function createSidebarPerfil(user) {

    const perfil = document.createElement("aside");
    perfil.classList.add("sidebar");

    perfil.innerHTML = `
        <img class="cover" src="${user.cover_image}" alt="background-photo">
        <div class="profile">
            <img class="avatar" src="${user.image}">
            <strong>${user.username}</strong>
            <span>${user.role}</span>
        </div>
        <footer>
            <a href="#" data-translate = "profile-edit">Editar seu perfil</a>
        </footer>
    `;

    document.querySelector(".wrapper").prepend(perfil);
    
}

