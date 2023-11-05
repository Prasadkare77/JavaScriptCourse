const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)
console.log(`Value of PI is: ${Math.PI}`)
let five = Math.PI
console.log(`Value of Five is: ${five}`)
five = 5
console.log(five)


const nullObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: false,

    orderChai: function(){
        console.log(`Chai nahi Bani`)
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,

})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`Key: ${key}, Values: ${value}`)
    }
    
}