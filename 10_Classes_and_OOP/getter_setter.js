class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Prasad`
    }

    set password(value){
        this._password = value
    }
}

const prasad = new User('prasad@kare.ai', 'abc')
console.log(`${prasad.email}  ${prasad.password}`)