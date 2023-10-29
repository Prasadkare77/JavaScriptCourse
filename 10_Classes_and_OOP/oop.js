const user = {
    username: 'Prasad',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        console.log(`Got user details from database`)
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this)

const userTwo = {
    username: 'Prasad',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        console.log(`Got user details from database`)
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(userTwo.username)
console.log(userTwo.getUserDetails())
console.log(this)

// const promise = new Promise();
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = User("Prasad", 1, true)
const userTwoo = User("Akshita", 2, false)
console.log(userOne.constructor)
console.log(userTwoo)

