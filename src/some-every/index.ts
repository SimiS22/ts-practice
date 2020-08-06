const array1 = [1, 2, 3, 4, 5, 6, 7]
const array2 = [2, 4, 6]

const even = (element: number) => element % 2 === 0;
const checkSomeEven = (inputArray: number[]) => inputArray.some(even);
console.log(checkSomeEven(array1))
console.log(checkSomeEven(array2))

const checkEveryEven = (inputArray: number[]) => inputArray.every(even)
console.log(checkEveryEven(array1));
console.log(checkEveryEven(array2));