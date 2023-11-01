// ES6

class UserOne {

    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password} abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new UserOne("Prasad", "prasad@gmail.com", "123")
console.log(newUser)
console.log(newUser.encryptPassword())
console.log(newUser.changeUsername())


// Behind the scene

function UserTwo(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

UserTwo.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

UserTwo.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const newUserA = new UserTwo("Akshita","ak@google.com","123")
console.log(newUserA)
console.log(newUserA.encryptPassword())
console.log(newUserA.changeUsername())