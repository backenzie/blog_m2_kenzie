import LoguinRequisicao from "./controller/loguin.controller.js";
import User     from  "./controller/user.controller.js"
import DadosPost from "./controller/dados.controller.js";
import Cards from "./controller/posts.controller.js";
import Post from "./models/posts.models.js";

const mainUserRegister = await User.useRegister({
        "username": "bac",
        "email": "bac@kenzie.com",
        "avatarUrl": "https://github.com/phmc99.png",
        "password": "Test123"
})

const loguin = await LoguinRequisicao.loguin({
    "email": "bac@kenzie.com",
    "password": "Test123"
})
//const novoPost = await Cards.fazerPost({
//    "content": "a vida nem sempre é tão facil quanto a gente quer..."
//})
const userID = await User.buscarUserId(220)
const deletarPost785 = await DadosPost.deletPost(785)
const idPost = await DadosPost.obterDadosIdPost(784)
const patchPost = await DadosPost.atualizarDadosPost(784, {"content": "o gato ainda esta vivo"})
await DadosPost.obterDadosPost(750)
await Cards.criarCards()

console.log(deletarPost785)
console.log(userID)
console.log(idPost)