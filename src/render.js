import { getAllComments, getGames, login } from './endpoints.js';
import { translatePage, createPost, createSidebarPerfil } from './utils.js';
import { createNewCommentModel } from './models.js';
import { renderPost, renderSideBar } from './facade.js';

let username = "Henrique";
let password = "Password123"

let language = "pt-br";

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

renderSideBar(username, language)

renderPost(language);

translatePage(language)

