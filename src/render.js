import { getAllComments, getGames, login } from './endpoints.js';
import { translatePage, createPost, renderSidebarPerfil } from './utils.js';
import { createNewCommentModel } from './models.js';

let username = "Henrique";
let password = "Password123"

const teste = () => {
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".header h1").textContent = "Dev Score";
        const contentElement = document.querySelector('.post .content').textContent = "teste";
        console.log("teste")
    });
}

renderSidebarPerfil(
    "../assets/cover-photo.png",
    "../assets/my-photo.jpg",
    "Henrique",
    "Moderador"
)

const comment = createNewCommentModel(
    1,
    "8f08",
    "Terraria",
    "Henrique Fonseca",
    "Gamer",
    "../assets/my-photo.jpg",
    0,
    "Publicado há 1h",
    [
        `"Cave, lute, explore, construa!" – Esse é o lema de Terraria, um jogo indie de ação e aventura lançado em 2011 pela Re-Logic. O título pode ser descrito como uma fusão entre Minecraft e Metroidvania, combinando construção e exploração em um mundo gerado proceduralmente. Mas Terraria vai além de ser apenas um "Minecraft 2D", oferecendo mecânicas profundas de progressão, combate e criatividade que o tornam único.`
    ]
)

createPost(comment)

translatePage("en-us")

getAllComments();


// let userId;

// getUserId(username)
// .then(Id => {userId = Id})


// createCommentFromSpecificGame("CS2", userComment).then(message => {console.log(message)})


// generateUniqueId().then(Id => {userId = Id})

// createNewUser(newUser)
// .then(users => {console.log(users)})

login(username, password)
.then(users => {console.log(users)})

// getCommentsFromSpecificGame("CS2")
// .then(games => {console.log(games);})
