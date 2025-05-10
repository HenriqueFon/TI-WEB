import { translatePage } from './utils.js';
import { createNewCommentModel } from './models.js';
import { renderPost, renderSideBar, renderGameSelectionBox, renderLanguageSelectionBox, renderCommentBox, makeComment } from './facade.js';

let username = "Henrique";
let password = "Password123"

let language = "English";

renderSideBar(username, language)

renderPost(language, username);

renderLanguageSelectionBox()

renderGameSelectionBox()

translatePage(language)

document.getElementById("language-select").addEventListener("change", function(event) {
        language = event.target.value;
        translatePage(language)

        document.querySelector("main").innerHTML = "";
        renderCommentBox(language)
        renderGameSelectionBox()
        renderPost(language, username);

        document.querySelector(".commentBoxForm").addEventListener("submit", function(event) {
            event.preventDefault(); 
            makeComment(username);
        });

});


function addDeleteListeners() {
    document.querySelectorAll(".delete-buton").forEach(button => {
        button.addEventListener("click", event => {
            const commentId = parseInt(event.target.getAttribute("data-id"));
            console.log("Botão clicado:", commentId); // Teste
            deleteSpecificComment(commentId);
        });
    });
}

let buttonDiv = document.getElementsByClassName("delete-buton-div");

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    console.log('abc')
})






