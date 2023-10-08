const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const total = myNums.reduce((runningValue, value) => {
    console.log(`Running Value: ${runningValue} and Current Value: ${value}`)
    return runningValue + value
},0)
console.log(total)

const myTotal = myNums.reduce((running, current) => (running + current),0)
console.log(myTotal)

const multiplication = myNums.reduce((runningValue, value) => {
    return runningValue * value
})
console.log(multiplication)


const shoppingCart = [
    { itemName: "JS Course", price: 299 },
    { itemName: "Python Course", price: 999 },
    { itemName: "Mobile Dev Course", price: 5999 },
    { itemName: "Data Science Course", price: 12999 }
]

const priceToPay = shoppingCart.reduce((running, element)=>{
    return running + element.price;
},0)
console.log(priceToPay)