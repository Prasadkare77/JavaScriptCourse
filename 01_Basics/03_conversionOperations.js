let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber, typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 false => 0

let isLoggedIn = "Prasad"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn, "type is: ", typeof booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Prasad" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber, typeof stringNumber);
