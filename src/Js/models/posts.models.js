export default class Post {
    constructor(avatar, autor, textoPost, data){
        this.avatar = avatar
        this.autor  = autor
        this.textoPost = textoPost
        this.data = data
    }
    
    criarPostCard(){

        const li = document.createElement("li")

        const divFoto = document.createElement("div")
        const img = document.createElement("img")

        const divTexto = document.createElement("div")
        const h2 = document.createElement("h2")
        const pTexto = document.createElement("p")

        const divConfig = document.createElement("div")
        const pEdit = document.createElement("button")
        const pDelete = document.createElement("button")
        const span = document.createElement("span")

        li.classList.add("cardPost")

        divFoto.classList.add("divFoto")
        img.src = this.avatar
        img.alt = "foto de usuario"

        divTexto.classList.add("divText")
        h2.innerText     = this.autor
        pTexto.innerText = this.textoPost

        divConfig.classList.add("divConfig")
        span.innerText = this.data
        pEdit.innerText = "Editar"
        pDelete.innerText = "Apagar"
        pDelete.classList.add("deletar")
       

       
        li.append(divFoto, divTexto, divConfig)
        divFoto.appendChild(img)
        divTexto.append(h2, pTexto)
        divConfig.append(pEdit, pDelete, span)
        return li
    }}


