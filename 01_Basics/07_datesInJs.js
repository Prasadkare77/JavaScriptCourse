// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

console.log(`Type of Date: ${typeof myDate}`);

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());

let myCreateDateTwo = new Date(2023, 0, 23,5,3)
console.log(myCreateDateTwo.toDateString());

let myCreateDateThree = new Date("2023-01-14")
console.log(myCreateDateThree.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreateDateThree.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMinutes());
console.log(newDate.getHours());
console.log(newDate.getDay());

newDate.toLocaleString('defult', {
    weekday: "long",
    timeZone: ''
})



