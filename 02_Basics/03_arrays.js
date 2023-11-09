const myArray = []
// %DebugPrint(myArray)

// Array having two types
// 01) Continious Array
// 03) Holey Array

// Small Interger (SMI)
// Packed Element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
//Continious or Packed_SMI_Elements

arrTwo.push(6.0)
// Packed_Double_Elements

arrTwo.push(7)
// Packed_Elements

arrTwo[10] = 11
// Holey_Elements

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])
