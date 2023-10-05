const name = "Prasad"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello My Name Is: ${name} and my RepoCount is ${repoCount}`)

const gameName = new String("Prasad-pd-")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('d'));
 
const subString = gameName.substring(0,3)
console.log(subString);

const sliceString = gameName.slice(-8,4)
console.log(sliceString);

console.log(gameName.split('-'));

const newStringOne = "  prasad     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prasad.com/prasad%20kare"
console.log(url.replace('%20','-'));
console.log(url.includes('prasad'));
console.log(url.includes('mark'));


