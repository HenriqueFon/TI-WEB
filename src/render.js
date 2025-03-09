import { createCommentFromSpecificGame, generateUniqueId, getUserId, login } from './endpoints.js';

let username = "Henrique";
let password = "Password123"

const teste = () => {
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".header h1").textContent = "Dev Score";
        console.log("teste")
    });
}

teste();
// let userId;

// getUserId(username)
// .then(Id => {userId = Id})


// let userComment = {
//     "id": 1,
//     "user": username,
//     "score": 8,
//     "comment": "Teste"
// }


// createCommentFromSpecificGame("CS2", userComment)
// .then(comment => {console.log(comment)})

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
