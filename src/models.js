export function createUserModel(
    userId, 
    username, 
    password, 
    image,
    favorite_genres,
    favorite_games,
    processor,
    ram,
    graphic_cards,
    storage,
    system
) {
    const newUser = {
        "id": userId,
        "username": username,
        "password": password,
        "image": image,
        "favorite_genres":favorite_genres,
        "favorite_games":favorite_games,
        "spec": {
            "processor": processor,
            "ram": ram,
            "graphic_cards": graphic_cards,
            "storage": storage,
            "operating_system":system
        }
    }

    return newUser;
}

export function createNewGameRegisterModel(
    name,
    image,
    genre,
    score,
    graphic_cards,
    id
) {
    const newGame = {
        "name": name,
        "image": image,
        "genre": genre,
        "avarage_score": score,
        "graphic_cards": graphic_cards,
        "comments": [],
        "id": id
    }

    return newGame;
}

export function createNewCommentModel(
    id,
    name,
    role,
    image,
    score,
    time,
    comment
) {
    const newComment = {
        "id": id,
        "user": name,
        "role": role,
        "image": image,
        "score": score,
        "time": "",
        "text": comment
    }

    return newComment
}