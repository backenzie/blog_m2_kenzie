export default class User {
    static urlRegister = "https://blog-m2.herokuapp.com/users/register"
    static url = "https://blog-m2.herokuapp.com/users"
    static token = JSON.parse(localStorage.getItem("@blogkenzie:token"))
    static headers =  {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
    }
    

    static async useRegister (userData) {
        return await fetch(this.urlRegister, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async buscarUserId (userId) { 
        return await fetch(`${this.url}/${userId}`, {
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }
}