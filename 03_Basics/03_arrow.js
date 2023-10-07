const user = {
    username: "prasad",
    price: 199,
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to Website`)
        console.log(this)
    }
}
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

console.log(this)


// function chai(){
//     const username = "prasad"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


console.log(`Arrow Function`)
const chai = () => {
    let username = "hitesh"
    console.log(this)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

console.log(`Implicit return`)
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"prasad"})
    

console.log(addTwo(2,3))


const myArray = [2, 5, 6, 3, 7, 8]
myArray.forEach(()=>{}) 