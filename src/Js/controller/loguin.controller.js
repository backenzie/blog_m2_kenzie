export default class LoguinRequisicao {
    static url = "https://blog-m2.herokuapp.com/users/login"

    static async loguin (dados) {
        return await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then(res => res.json())
        .then((response)=>{
            localStorage.setItem("@blogkenzie:userId", JSON.stringify(response.userId))
            localStorage.setItem("@blogkenzie:token", JSON.stringify(response.token))
        })
        .catch(err => console.log(err))
    }
}