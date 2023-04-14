export const userService = {
    getUser
}

let user =
{
    name: "Almog Ohayon",
    coins: 100,
    moves: []
}

function getUser() {
    return user
}
