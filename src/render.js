import { translatePage } from './utils.js';
import { createNewCommentModel } from './models.js';
import { renderPost, renderSideBar, renderGameSelectionBox, renderLanguageSelectionBox } from './facade.js';

let username = "Henrique";
let password = "Password123"

let language = "日本語";

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

renderPost(language);

renderLanguageSelectionBox()

renderGameSelectionBox()

translatePage(language)

document.getElementById("language-select").addEventListener("change", function(event) {
        language = event.target.value;
        translatePage(language)

        document.querySelector("main").innerHTML = "";
        renderPost(language);
});




