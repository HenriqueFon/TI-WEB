const dados={
    usuarios: [
        {id:1, nome: "Davi Jonas", login: "Dova", senha:"abc123", email: "dovajonas@gmail.com"},
        {id:2, nome: "São Pedro", login: "Chaveiro", senha:"abc123", email: "saopedro@gmail.com"}
    ]
}

//variavel quem mantem os dados do usuario logado
let usuario = null;

function checkLoggedUser(){
    const usuarioSTR = sessionStorage.getItem('usuario')
    if(!usuarioSTR){
        location.href = 'Login.html'
    }
    usuario = JSON.parse(usuarioSTR)
    return true
}

function loginUser(login, password){
    const usuarioOBJ = dados.usuarios.find(elem => (elem.login === login) && (elem.senha === password))

    if (!usuarioOBJ){
        return false
    }
    else {
        sessionStorage.setItem('usuario', JSON.stringify(usuarioOBJ))
        return true
    }
}

function logouUser(){
    sessionStorage.clear();
    location.href="Login.html"
}