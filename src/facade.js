import { getAllComments } from "./endpoints";


export async function renderPost() {
    const comments = await getAllComments();

    console.log(comments)
}