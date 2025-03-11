import { translatePage } from './utils.js';
import { createNewCommentModel } from './models.js';
import { renderPost, renderSideBar, renderGameSelectionBox } from './facade.js';

let username = "Henrique";
let password = "Password123"

let language = "jp";

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

renderGameSelectionBox()

translatePage(language)

