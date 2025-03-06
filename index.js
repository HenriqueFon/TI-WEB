const { login, verifyValidUser } = require('./src/endpoints');

let username = "Henrique";
let password = "Password123"

// login(username, password)
// .then(users => {console.log(users)})

verifyValidUser(username)
.then(users => {console.log(users)})

// getCommentsFromSpecificGame("CS2")
// .then(games => {console.log(games);})
