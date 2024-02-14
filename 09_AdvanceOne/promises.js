// fetch('http://www.google.com').then().catch().finally()

const promisOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calss, cryptography, network

    setTimeout(() => {
        console.log('Async Task Is Complete');
        resolve()
    }, 500);
})

promisOne.then(() => {
    console.log("Promis Consumed")
})

// -----------------***----------------

const promistwo = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async Task Two is Complete');
        resolve()
    }, 500);
}).then(() => {
    console.log("Async Two Resolve");
})

// -----------------***------------------

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async Task Three is Complete')
        resolve({username:'prasad', email:'prasad@gmail.com'})
    }, 500);
})

promiseThree.then((user) => {
    console.log(user);
})

// -----------------***------------------

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:'Prasad', password:'12345'})
            console.log("Resolved")
        } else {
            reject('Error: Something went wrong')
        }
    }, 500);
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('Promis either rejected or resolved')
})

// -----------------***------------------

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username:'javascript', password:'123'})
        } else {
            console.log('Error: JS went wrong')
        }
    }, 500);
})

async () => {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

fetch('https://api.github.com/users/Prasadkare77')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})