import DadosPost from "./dados.controller.js";
import Post from "../models/posts.models.js"

export default class Cards {
    static url = "https://blog-m2.herokuapp.com/posts"
    static token = JSON.parse(localStorage.getItem("@blogkenzie:token"))
    static headers =  {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
}

    static async criarCards () {
        const ul = document.querySelector(".post")
        ul.innerHTML = ""
 
        const dados = await DadosPost.obterDadosPost()

        dados.forEach((chave) => {
           const card = new Post (chave.user.avatarUrl, chave.user.username, chave.content, chave.createdAt)
           const cardCriado = card.criarPostCard(card)
           ul.append(cardCriado)
        })

    }

    static async fazerPost (post) {
        return await fetch(this.url, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }
}
