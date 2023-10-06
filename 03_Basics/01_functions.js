
function  syaMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("A");
    console.log("D");

}   
syaMyName()

console.log(``);

function addTwoNumbers(number1, number2){
    const addition = number1 + number2
    console.log(addition);
}
addTwoNumbers(5,3)

console.log(``);

function returnTwoNumbers(number1, number2){
    const addition = number1 + number2
    return addition;
}
const result1 = returnTwoNumbers(4,3)
console.log(result1);

console.log(``);

function addTwoNumbersr(number1, number2){
    return number1 + number2;
}
const result2 = addTwoNumbersr(3,3)
console.log(result2);

console.log(``);

function loginUserMessage(username) {
    return `${username} just logged in`
}
console.log(loginUserMessage("Prasad"));
console.log(loginUserMessage());

console.log(``);

function loginUserMessage(username) {
    if(username === undefined){
        console.log(`Please enter a username`);
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Prasad"));
console.log(loginUserMessage());

console.log(``);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log(`Please enter a username`);
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Prasad"));
console.log(loginUserMessage());

console.log(``);

// ++++++++++++++ Rest Parameter ++++++++++++++
console.log(`++++++++++++++ Rest Parameter ++++++++++++++`);

function calculateCartPrice(val1,val2, ...num1) {
    return val1, val2, num1
}
console.log(calculateCartPrice(200,400,500,2000));

console.log(``);

console.log(`---------- Accessing Object data into function --------`);
const user = {
    username: "prasad",
    price: 299
}

function handleObject(anyObject){
    console.log(`Username: ${anyObject.username}, Price: ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username: "sam",
    price: 199
})
console.log(``);

console.log(`---------- Accessing Array data into function --------`);

const myNewArray = [200, 400, 100, 600]
function retunSecondValue(getArray){
    return getArray[1]
}
console.log(retunSecondValue(myNewArray));
console.log(retunSecondValue([200, 500, 100, 600]));