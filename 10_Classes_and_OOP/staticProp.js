class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static crateId(){
        return `123`
    }


}

const prasad = new User("Prasad")
console.log(prasad.logMe())
console.log(prasad.crateId())



class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("Iphone","i@phone.com")
iphone.logMe()
console.log(iphone.crateId())