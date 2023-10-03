const accountId = 12313
let accountEmail = "prasad@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState 

// accountId = 111
accountEmail = "pk@pk.com"
accountPassword = "121212"
accountCity = "Mumbai"

// const accountId = 1111
// let accountEmail = "abcd@gmail.com"
var accountPassword = "54321"
accountCity ="Banglore"
/* Prefer not to use var
   Because of issue in block scope and functional scope
*/

console.log(accountId,accountEmail,accountPassword,accountCity, accountState);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])