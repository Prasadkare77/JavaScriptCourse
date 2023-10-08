// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        console.log(`5 Is best number`)
    }
    // console.log(element);
}

console.log(``);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`)
    for (let j = 0; j <= i; j++) {
        // console.log(`Inner Loop Value: ${j} and inner Loop: ${i}`)   
        // console.log(i + '*' + j + ' = ' + i * j)
    }   
}

let myArray = ["flash", "batman", "superman"]
console.log(`Array Length: ${myArray.length}`)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
    
}
console.log(``)


// Break and Continue
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`We got ${5}`)
        break;
    }
    console.log(`Value of I is : ${i}`) 
}
console.log(``)
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`We got ${5}`)
        continue;
    }
    console.log(`Value of I is : ${i}`) 
}
