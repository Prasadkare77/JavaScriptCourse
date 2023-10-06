const array = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]

const myArray = new Array(1,2,3,4)
console.log(array[1]);

array.push(6)
array.push(7)
console.log(array);
array.pop()

array.unshift(0)
console.log(array);
array.shift()
console.log(array);

console.log(array.includes(9));
console.log(array.indexOf(3));

const newArray = array.join()
console.log(array);
console.log(newArray, typeof newArray);

// Slice or Splice
console.log(``);
console.log(`Slice and Splice`);

console.log("A", array);
array.slice(1,3)
console.log(array);

console.log("B", array);

const mna2 = array.splice(1,3)
console.log(mna2);
console.log("C", array);

array.splice(1,0,23)
console.log(array);

array.splice(2,0,24)
console.log(array);

array.splice(2,1,25)
console.log(array);

array.splice(3,3,26,27,28)
console.log(array);