//Set

const mySet = new Set();
mySet.add(1);
mySet.add(3)
mySet.add(3) //will not be added as it already has 3
mySet.add('Simi')
mySet.add('3')
mySet.add({ a: 1, b: 2 })
const o = { a: 1, b: 2 }
mySet.add(o)
console.log(mySet.has(3))
console.log(mySet.delete('3'))
console.log(mySet)


for (let item of Array.from(mySet)) {
    console.log(item)
}

//set
let setA = new Set([1, 2])
let setB = new Set([1, 2, 3, 4])
let setC = new Set([3, 4, 5, 6])
let setD = new Set([1, 2, 3])

// const isSuperset = (set: any, subset: any) => {
//     for (let element of Array.from(subset)) {
//         return !set.has(element) ? true : false;
//     }
// }
// console.log(isSuperset(setA, setB))

const difference = (set1: any, set2: any) => {
    let _difference = new Set(set1)
    for (let element of Array.from(set2)) {
        if (_difference.has(element)) {
            _difference.delete(element)
        }
    }
    return [..._difference]; //for getting output as an array
}
console.log(difference(setB, setA))

//Set relation with arrays
const myArr1 = ['val1', 'val2', 'val3'];
let myArrSet1 = new Set(myArr1);
console.log([...myArrSet1]) //will be same as input array

const myArr2 = [2, 2, 3, 3, 4, 5, 5, 6, 6, 6, 2];
let removeDuplicates = new Set(myArr2)
console.log([...removeDuplicates])

//Set relation with strings

const stringSize = (text: string) => {
    let myStr = new Set(text)
    console.log([...myStr], myStr.size)
}
stringSize('India')
stringSize('Firefox')
stringSize('firefox')

//Weakset

const ws = new WeakSet();
const someObj1 = { x: 1, y: 2 };
const someObj2 = { x: 3, y: 2 };

ws.add(someObj2);
ws.add(someObj1);
console.log(ws)

//Map

const contacts = new Map()
contacts.set('Simi', 535426675783);
contacts.set(254573264897, 'Chintu')
console.log(contacts)

//
const myMap = new Map();
let keyStr = 'a string'
let keyObj = {}
let keyFunc = () => { }

myMap.set(keyStr, 'value associated with key string')
myMap.set(keyObj, 'value associated with key object')
myMap.set(keyFunc, 'value associated with key function')

console.log([...myMap])

console.log(myMap.size)
console.log(myMap.get('a string'))
console.log(myMap.delete(keyObj))

//
const myMap2 = new Map();
myMap2.set(1, 'one')
myMap2.set(2, 'two')

console.log(myMap2)
console.log(myMap2.get(1))
console.log(myMap2.get('two'))//getting undefined as there is no key with 'two'
for (let [key, value] of myMap2) {
    console.log(key + ' = ' + value)
}
for (let key of myMap2.keys()) {
    console.log(key)
}
for (let value of myMap2.values()) {
    console.log(value)
}