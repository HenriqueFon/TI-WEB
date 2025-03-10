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

export function createPost(authorName, authorRole, avatarSrc, postTime, postContent) {
    // Criando um novo elemento <article>
    const post = document.createElement("article");
    post.classList.add("post");

    // Definindo o conteúdo com innerHTML
    post.innerHTML = `
        <header>
            <div class="author">
                <img class="avatar" src="${avatarSrc}" alt="Avatar de ${authorName}">
                <div class="authorInfo">
                    <strong>${authorName}</strong>
                    <span>${authorRole}</span>
                </div>
            </div>
            <time dateTime="${new Date().toISOString()}" data-translate="post-time">${postTime}</time>
        </header>

        <div class="content">
            ${postContent.map(text => `<p>${text}</p>`).join("")}
        </div>

        <form class="commentForm">
            <textarea placeholder="Deixe um comentário" data-translate-placeholder="comment-placeholder"></textarea>
            <button type="submit" data-translate="comment-button">Comentar</button>
        </form>
    `;

    console.log(post.innerHTML)

    // Adicionando o post ao <main>
    document.querySelector("main").appendChild(post);
}

