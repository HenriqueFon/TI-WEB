import { getAllComments } from "./endpoints";


export function renderPost() {
    const comments = getAllComments();

    console.log(comments)
}