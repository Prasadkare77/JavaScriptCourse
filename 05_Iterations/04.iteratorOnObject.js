console.log(`For in loop for Object`)
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    console.log(key,"=>", myObject[key])
}
for (const key in myObject) {
    if (Object.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        console.log(element)
    }
}

console.log(``)
console.log(`For in loop for Array`)
const programming = ['js', "rb", "py", "java", "cpp"]
for (const key in programming) {
    if (Object.hasOwnProperty.call(programming, key)) {
        const element = programming[key];
        console.log(element)
        
    }
}