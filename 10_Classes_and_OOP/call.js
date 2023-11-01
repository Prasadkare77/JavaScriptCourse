function SetUsername(username) {
    // Complex DB Calls
    this.username = username
    console.log("Called")
}

function createUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const newUser = new createUser("Prasad","prasad@fb.com", "123")
console.log(newUser);