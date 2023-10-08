const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`1.Add 10 to the each element of array`)
const addTen = myNums.map((num) => {
    return num + 10;
})
console.log(addTen)

const addTen1 = myNums.map((num) =>  num + 10
)
console.log(addTen1)
console.log(``)

console.log(`1.Doubled array`)
const doubleNum = myNums.map((num)=>{
    return num * 2
})
console.log(doubleNum)
console.log(``)

console.log(`Double Map`)
const newNums = myNums
                    .map((num)=> num * 10)
                    .map((num)=> num + 1)
                    .filter((num) => num >= 40)
console.log(newNums)
        