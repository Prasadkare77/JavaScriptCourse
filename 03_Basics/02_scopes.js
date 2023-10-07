var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(`Inner: ${a}`)
    console.log(b)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(a)
console.log(c)

console.log(``)
console.log(`------ Clousure -------`);
function one(){
    const username = "prasad"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}
one()


if (true) {
    const username = "prasad"
    if (username === "prasad") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

console.log(``)
console.log(`------ Interesting -------`);

function addOne(num) {
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)