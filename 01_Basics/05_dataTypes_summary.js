// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue);

const isLoggedIn = false
const outsideTemp = null
let userEmail;
console.log(typeof outsideTemp);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bugNumber = 12345678901234567890n

// Reference Types (Non Primitive)

// Array Object, Functions

const heros = ["Shaktiman, Naagraj,Haatim"]
{
    name:"Prasad";
    age:22
};

console.log(`Heros Type: `,typeof heros);

const myData ={
    name:"Prasad",
    age:22,
    email:"prasad@gmail.com"
}

const myFunction = function(){
    console.log("Hello Prasad");
}

console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "Prasadkaredotcom" 
let anothername = myYoutubename
anothername = "devachaprasad"
console.log(myYoutubename,anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "prasad@gmail.com"
let userThree = {...userOne}

console.log(userOne.email);
console.log(userTwo.email);