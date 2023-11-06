function User(email, password) {
    this._email = email
    this.password = password

    Object.defineProperty(this,'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password', {
        get: function(){
            return this.password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}

const prasad = new User("prasad@gmail.com","chai")
console.log(prasad.email)