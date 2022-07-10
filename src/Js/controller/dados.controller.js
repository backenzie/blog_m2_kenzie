export default class DadosPost {

    static token = JSON.parse(localStorage.getItem("@blogkenzie:token"))
    static url = 'https://blog-m2.herokuapp.com/posts?page=1'
    static headers =  {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
    }

    static options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
        },
    }

    static async obterDadosPost () {
        return await fetch(this.url, this.options)
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log(err))
    }

    static async obterDadosIdPost (idPost) {
        const url = 'https://blog-m2.herokuapp.com/posts'

        return await fetch(`${url}/${idPost}`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }
    static async atualizarDadosPost (postID, newContent) {
        const url = 'https://blog-m2.herokuapp.com/posts'
        return await fetch(`${url}/${postID}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(newContent)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async deletPost (postID) {
        const url = 'https://blog-m2.herokuapp.com/posts'
        return await fetch(`${url}/${postID}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

}