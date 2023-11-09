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

// bound check
// hasOwnProperty(arrtTwo, 9)
// hasOwnProperty(arrtTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Holes Are very expensive in Javascript


const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2])

// SMI >> Double >> Packed
// H_SMI > H_Double > H_Packed

const arrFour = new Array(3)
// Just Three Holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED
arrFive.push('2') // PACKED
arrFive.push('3') // PACKED

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(Infinity) //PACKED_DOUBLE_ELEMENTS

// for, for-of, forEach
