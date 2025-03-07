//Valida se o nome de usuário já foi cadastrado
function verifyValidUserForRegister(username) {
    return fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(userCredentials => {
        
        const findUser = userCredentials.find(user => user.username === username);

        //se usuário for encontrado na base de dados, ele não é valido!
        if (findUser) {
            return false;
        } else {
            return true;
        }

    })
    .catch(error => { return `Erro ao buscar usuários`});
}

//Gera um número aleatório para ser o Id do usuário dentro do Banco de dados
function generateUniqueId() {
    return fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(userCredentials => {

        let uniqueId;

        do {
            uniqueId = generateRandomNumber();
        } while (userCredentials.some(user => user.id == uniqueId));

        return uniqueId;

    })
    .catch(error => { return `Erro ao buscar usuários`});
}

//Gera um número aleatório para o Id
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    return randomNumber;
}

//Pega o Id do usuário
function getUserId(username) {
    return fetch('http://localhost:3001/users')
    .then(response => response.json())
    .then(userCredentials => {
        
        const findUser = userCredentials.find(user => user.username === username);

        
        if (findUser) {
            return findUser.Id;
        } else {
            return "Não foi possível encontrar o Id do usuário";
        }

    })
    .catch(error => { return `Erro ao buscar usuários`});
}


module.exports = {
    verifyValidUserForRegister,
    generateUniqueId,
    getUserId
};