const userEmail = 'p@prasad.ai'
if (userEmail) {
    console.log(`Got user email`)
} else {
    console.log(`Dont have user email`)
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log(`Array is empty`)
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0){
    console.log(`Object is empty`)
}

// Nullish Coalescing Operator (??) : Null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)
val1 = null ?? 10
console.log(val1)
val1 = undefined ?? 15
console.log(val1)
val1 = null ?? 20 ?? 50
console.log(val1)


// Ternary operator

// condition ? true : false
const iceTeaPrice = 100 
iceTeaPrice < 80 ? console.log(`Less Than Eighty`) : console.log(`More Than Eighty`)