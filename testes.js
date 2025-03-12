import { getSpecificUserData, updateAvarageScoreOfGame, createCommentFromSpecificGame } from "./src/endpoints.js";

//Realiza a criação de um novo comentário
export async function makeComment(username) {

    const game = "Terraria";
    const score = 5;
    const comment = "Jogão";

    const user = await getSpecificUserData(username)

    const updateScore = await updateAvarageScoreOfGame(game, score);

    await createCommentFromSpecificGame(game, comment, user, score);
}

console.log(makeComment("Henrique"))