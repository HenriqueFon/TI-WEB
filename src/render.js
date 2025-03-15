import { translatePage } from './utils.js';
import { createNewCommentModel } from './models.js';
import { renderPost, renderSideBar, renderGameSelectionBox, renderLanguageSelectionBox, renderCommentBox, makeComment } from './facade.js';

let username = "Henrique";
let password = "Password123"

let language = "English";

function addCommentEventListener() {
    document.getElementById("commentButton").addEventListener("click", () => makeComment(username));
}

const comment = createNewCommentModel(
        1,
        "8f04",
        "CS2",
        "Henrique",
        "Moderador",
        "",
        7,
        "2023-07-15T08:45:22.456Z",
        "Melhor FPS do mercado"
)    

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
        renderPost(language, username);
});

document.querySelector(".commentBoxForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    makeComment(username);
});








