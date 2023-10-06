// singleton

// objects literals
// Object.create

const symbol = Symbol("key1")

const JsUser = {
    name: "Prasad",
    fullName: "Prasad Kare",
    mySym: "" ,
    [symbol]:"myKey1",
    age: 18,
    location: "Pune",
    email: "prasad@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[symbol], typeof JsUser[symbol]);

JsUser.mySym = symbol
console.log(JsUser.mySym, typeof JsUser.mySym);

JsUser.email = "prasad@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "prasad@microsoft.com"
console.log(JsUser);

JsUser.greetingOne = function(){
    console.log(`Hello JSUser`);
}
console.log(JsUser.greetingOne());

JsUser.greetingTwo = function(){
    console.log(`Hello JSUser: ${this.name}`);
}
console.log(JsUser.greetingTwo());

console.log(JsUser);
