import { login } from './endpoints.js';
import { translatePage, createPost, createSidebarPerfil } from './utils.js';

let username = "Henrique";
let password = "Password123"

const teste = () => {
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".header h1").textContent = "Dev Score";
        const contentElement = document.querySelector('.post .content').textContent = "teste";
        console.log("teste")
    });
}

createSidebarPerfil(
    "../assets/cover-photo.png",
    "../assets/my-photo.jpg",
    "Henrique",
    "Moderador"
)

createPost(
    "Henrique Fonseca",
    "Gamer",
    "../assets/my-photo.jpg",
    "Publicado há 1h",
    [
        `"Cave, lute, explore, construa!" – Esse é o lema de Terraria, um jogo indie de ação e aventura lançado em 2011 pela Re-Logic. O título pode ser descrito como uma fusão entre Minecraft e Metroidvania, combinando construção e exploração em um mundo gerado proceduralmente. Mas Terraria vai além de ser apenas um "Minecraft 2D", oferecendo mecânicas profundas de progressão, combate e criatividade que o tornam único.`
    ]
)

translatePage("en-us")


// let userId;

// getUserId(username)
// .then(Id => {userId = Id})


let userComment = {
    "id": 1,
    "user": username,
    "score": 8,
    "comment": "Teste"
}


// createCommentFromSpecificGame("CS2", userComment).then(message => {console.log(message)})


// generateUniqueId().then(Id => {userId = Id})


// const newUser = {
//     "id": userId,
//     "username": "Henrique",
//     "password": "Password123",
//     "image": "",
//     "favorite_genres":["RPG"],
//     "favorite_games":[],
//     "spec": {
//         "processor": "Intel(R) Core(TM) i7-10700KF CPU @ 3.80GHz",
//         "ram": "16GB DDR4",
//         "graphic_cards": "NVIDIA GeForce RTX 3070",
//         "storage": "1TB SSD",
//         "operating_system": "Windows 11"
//     }
// }

// createNewUser(newUser)
// .then(users => {console.log(users)})

login(username, password)
.then(users => {console.log(users)})

// getCommentsFromSpecificGame("CS2")
// .then(games => {console.log(games);})
