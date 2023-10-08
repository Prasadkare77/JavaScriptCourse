// IF
// const userLoggedIn = true
const temparature = 41

if (temparature === 41) {
    console.log(`Less Than 50`)
} else {
    console.log(`Greater than 50`)
}

if(2 !== '2'){
    console.log("executed");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if (score > 100) {
    const power = 'fly'
    console.log(`User Power: ${power}`)
} else {
    console.log(`User Power: ${power}`)
}

// Short hand notation

const balance = 1000
if (balance > 500) console.log("test");

if (balance < 500) {
    console.log(`Less than`)
} else if (balance < 750) {
    console.log(`Less than 750`)
} else if (balance < 900) {
    console.log(`Less than 900`)
} else {
    console.log(`Less than 1200`)
}

//

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log(`Allow to buy course`)
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log(`User Logged In`)
}
