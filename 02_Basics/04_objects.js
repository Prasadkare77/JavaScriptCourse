const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "prasad",
            lastname: "kare"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


const obj = Object.assign({}, obj1, obj2, obj3)
console.log(obj);

const objS = {...obj,...obj2,...obj3}
console.log(objS);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "prasad"
}
// course.courseInstructor

const {courseinstructor: instructor} = course;
console.log(instructor);

// {
//     "name": "prasad",
//     "course": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]