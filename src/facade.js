import { getAllComments } from "./endpoints.js";
import { createPost } from "./utils.js";


export async function renderPost() {
    const comments = await getAllComments();

    console.log(comments)

    const post = comments.forEach(comment => {
        createPost(comment)
    });

    return post;
}