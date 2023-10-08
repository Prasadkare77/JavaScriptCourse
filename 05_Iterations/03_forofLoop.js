// for
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i)
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each Char is: ${greet}`)
}

// Maps

const map = new Map()
map.set('In', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('In', 'India')
console.log(map)
for (const [key, value] of map) {
    console.log(key, '=>', value)
}

for (const key in map) {
    if (Object.hasOwnProperty.call(map, key)) {
        const element = map[key];
        console.log(element)
    }
}

// const myObject = {
//     game: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key,value] of myObject) {
//     console.log(key)
// }

// Sets
const sets = new Set()