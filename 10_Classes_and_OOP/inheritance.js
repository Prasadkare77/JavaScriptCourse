class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username Is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`)
    }
}

const newUser = new Teacher("Prasad","prasad@google.com", "123")
newUser.addCourse()
newUser.logMe()

const newTeacher = new User("Akshita")
newTeacher.logMe()

console.log(newUser instanceof User)