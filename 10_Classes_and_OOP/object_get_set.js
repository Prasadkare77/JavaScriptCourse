const User = {
    _email:'p@pk.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const prasad = Object.create(User)
console.log(prasad.email)
