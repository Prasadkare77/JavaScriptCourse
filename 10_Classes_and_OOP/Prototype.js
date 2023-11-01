// let myName = "Prasad     "
// console.log(myName.length)

// console.log(myName.trueLength())

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function () {
        console.log(`Spidy Power is: ${this.spiderman}`)
    }
}

Object.prototype.prasad = function () {
    console.log(`Prasad is present in all Object`)
}
heroPower.prasad()
myHeros.prasad()

Array.prototype.arrayPrasad = function (){
    console.log(`Array Prasad Says Hello`)
}
// heroPower.arrayPrasad()
myHeros.arrayPrasad()


const User ={
    name:"prasad",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport)
// console.log(Teacher)

let anothetUSername = "PrasadAurAkshita    "
String.prototype.trueLength = function (){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
anothetUSername.trueLength()
"prasad".trueLength()
"akshita".trueLength()