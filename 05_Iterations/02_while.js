// while (condition) {
    
// }

let i = 0;
while (i<10) {
    console.log(i)
    i= i+1;
}

let myArray = ["flash", "batman", "superman"]
let arr = 0
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`)
    arr = arr + 1
}

console.log(``)
console.log(`Do While Loop`)

let score = 11

do {
    console.log(`Score is: ${score}`)
    score++
} while (score<=10);