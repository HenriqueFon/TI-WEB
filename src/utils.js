import { translations } from '../dictionary/language.js';

//Gera um número aleatório para o Id
export function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    return randomNumber;
}

//Faz o calculo de tempo
export function timeSinceComment(commentDate, language) {

    if (!commentDate || isNaN(new Date(commentDate))) {
        console.error("Data inválida recebida:", commentDate);
        return "Data inválida";
    }

    const now = new Date(); // Data atual
    const commentTime = new Date(commentDate); // Data do comentário
    const diffInMs = now - commentTime; // Diferença em milissegundos

    // Converter milissegundos para unidades maiores
    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    switch (language) {
        case "pt-br":
            if (years > 0) return `${years} ano${years > 1 ? 's' : ''} atrás`;
            if (months > 0) return `${months} mês${months > 1 ? 'es' : ''} atrás`;
            if (days > 0) return `${days} dia${days > 1 ? 's' : ''} atrás`;
            if (hours > 0) return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
            if (minutes > 0) return `${minutes} minuto${minutes > 1 ? 's' : ''} atrás`;
            return `${seconds} segundo${seconds > 1 ? 's' : ''} atrás`;

        case "en-us":
            if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
            if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
            if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
            if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
            if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;

        case "jp":
            if (years > 0) return `${years}年前に公開されました`;
            if (months > 0) return `${months}ヶ月前に公開されました`;
            if (days > 0) return `${days}日前に公開されました`;
            if (hours > 0) return `${hours}時間前に公開されました`;
            if (minutes > 0) return `${minutes}分前に公開されました`;
            return `${seconds}秒前に公開されました`;

        default:
            return "Unsupported language"; // Caso a linguagem não seja reconhecida
    }
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

    console.log(document.querySelectorAll("[data-translate-placeholder]"))

    placeholders.forEach(element => {
        const key = element.getAttribute("data-translate-placeholder");
        if (translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });
}

export function createPost(comment, image, role, language) {

    const score = translations[language]["game-score"];

    const commentTime = timeSinceComment(comment.date, language)

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
            <time dateTime="${new Date().toISOString()}" data-translate="post-time">${commentTime}</time>
        </header>

        <dev class = "game-name"><h2>${comment.game_name}</h2></dev>

        <div class="content">
            <p>${comment.comment}</p>
        </div>

        <dev class = "game-score"><h3>${score} ${comment.score}</h3></dev>
    `;

    // Adicionando o post ao <main>
    document.querySelector("main").appendChild(post);
}

export function createSidebarPerfil(user, language) {

    const profileText = translations[language]["profile-edit"];

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
            <a href="#" data-translate = "profile-edit">${profileText}</a>
        </footer>
    `;

    document.querySelector(".wrapper").prepend(perfil);
    
}

export function createSelectBox(name) {

    const selection = document.getElementById("game-select");

    const option = document.createElement("option");
    option.classList.add("game-option");
    option.value = name;
    option.textContent = name;

    selection.appendChild(option);
}

