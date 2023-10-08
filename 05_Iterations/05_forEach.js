const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((element) => {
    console.log(`Items: ${element}`)
})
console.log(``) 

coding.forEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}, `)
})
console.log(``)

function printme(element){
    console.log(element)
}
coding.forEach(printme)
console.log(``)

coding.forEach((element,index, array) => {
    console.log(element, index, array)
})
console.log(``)

const myCoding =[
    {
        language: "javascript",
        languageName: "js"
    },
    {
        language: "python",
        languageName: "py"
    },
    {
        language: "java",
        languageName: "java"
    }
]

myCoding.forEach((element,index) => {
    console.log(element.language, '->', element.languageName)
})